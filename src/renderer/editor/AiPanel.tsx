import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { LlmStatus, FramoraSettings } from '../../preload';
import { getEditTasks, getGenerateTasks, getTask } from './aiPrompts';
import type { TaskContext } from './aiPrompts';
import { postProcessLlmOutput, postProcessEditOutput } from './aiPostProcess';
import { getValidator } from './aiValidators';

interface AiPanelProps {
  source: string;
  selection: string;
  cursorPos: number;
  onInsert: (text: string) => void;
  onReplace: (text: string) => void;
  onClose: () => void;
}

type PanelMode = 'edit' | 'generate';

export function AiPanel({
  source,
  selection,
  cursorPos,
  onInsert,
  onReplace,
  onClose,
}: AiPanelProps): JSX.Element {
  const [llmStatus, setLlmStatus] = useState<LlmStatus>({ state: 'stopped' });
  const [generating, setGenerating] = useState(false);
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [customInput, setCustomInput] = useState('');
  const [pendingTaskId, setPendingTaskId] = useState<string | null>(null);
  const [taskSelection, setTaskSelection] = useState('');

  const outputRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef(false);
  const chunkCleanup = useRef<(() => void) | null>(null);
  const genCounter = useRef(0);

  const hasSelection = selection.trim().length > 0;
  const panelMode: PanelMode =
    generating && activeTaskId
      ? (getTask(activeTaskId)?.category === 'edit' ? 'edit' : 'generate')
      : hasSelection ? 'edit' : 'generate';

  const activeTask = activeTaskId ? getTask(activeTaskId) : null;
  const showDiff = activeTask?.category === 'edit' && taskSelection && output && !generating;

  useEffect(() => {
    void window.framora.llmStatus().then(setLlmStatus);
    const off = window.framora.onLlmStatus(setLlmStatus);
    return off;
  }, []);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const s: FramoraSettings = await window.framora.getSettings();
      if (!s.llmEnabled || !s.llmModelPath || cancelled) return;
      const st = await window.framora.llmStatus();
      if (st.state === 'stopped' || st.state === 'error') {
        await window.framora.llmStart();
      }
      const st2 = await window.framora.llmStatus();
      if (st2.state === 'ready' && !st2.modelId && !cancelled) {
        await window.framora.llmLoadModel(s.llmModelPath);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    return () => {
      if (chunkCleanup.current) {
        chunkCleanup.current();
        chunkCleanup.current = null;
      }
    };
  }, []);

  const startEngine = useCallback(async () => {
    setError(null);
    try {
      await window.framora.llmStart();
      const s = await window.framora.getSettings();
      if (s.llmModelPath) {
        await window.framora.llmLoadModel(s.llmModelPath);
      }
    } catch (err) {
      setError(String(err));
    }
  }, []);

  const runTask = useCallback(
    async (taskId: string, inputText?: string) => {
      const task = getTask(taskId);
      if (!task) { setError(`Unknown task: ${taskId}`); return; }
      if (generating) return;

      if (task.needsCustomInput && !inputText) {
        setPendingTaskId(taskId);
        return;
      }

      const snapSelection = selection.trim();
      const snapSource = source;
      const snapCursorPos = cursorPos;

      setError(null);
      setOutput('');
      setGenerating(true);
      setActiveTaskId(taskId);
      setTaskSelection(snapSelection);
      setPendingTaskId(null);
      abortRef.current = false;

      const ctx: TaskContext = {
        source: snapSource,
        selection: snapSelection,
        cursorPos: snapCursorPos,
        customInput: inputText ?? '',
      };

      const prompt = task.buildPrompt(ctx);
      const isEdit = task.category === 'edit';

      genCounter.current++;
      const myGen = genCounter.current;

      let accumulated = '';
      if (chunkCleanup.current) chunkCleanup.current();
      chunkCleanup.current = window.framora.onLlmChunk((chunk) => {
        if (genCounter.current !== myGen) return;
        if (abortRef.current) return;
        if (chunk.done) {
          setGenerating(false);
          setOutput((prev) => {
            if (!prev) return prev;
            let processed = isEdit ? postProcessEditOutput(prev) : postProcessLlmOutput(prev);
            const validator = getValidator(taskId);
            if (validator) processed = validator(processed, inputText);
            return processed;
          });
          return;
        }
        accumulated += chunk.text;
        setOutput(accumulated);
      });

      const safetyTimer = setTimeout(() => {
        if (genCounter.current === myGen) {
          setError('No response from model — timed out');
          setGenerating(false);
        }
      }, 30_000);

      try {
        const result = await window.framora.llmChat({
          messages: [
            { role: 'system', content: prompt.system },
            { role: 'user', content: prompt.user },
          ],
          maxTokens: prompt.maxTokens,
          temperature: prompt.temperature,
        });
        clearTimeout(safetyTimer);
        if (!result.ok) {
          setError(result.error ?? 'Chat request failed');
          setGenerating(false);
        }
      } catch (err) {
        clearTimeout(safetyTimer);
        setError(String(err));
        setGenerating(false);
      }
    },
    [generating, source, selection, cursorPos]
  );

  const handleStop = useCallback(() => {
    abortRef.current = true;
    genCounter.current++;
    void window.framora.llmAbort();
    setGenerating(false);
    setOutput((prev) => (prev ? postProcessLlmOutput(prev) : prev));
  }, []);

  const handleAccept = useCallback(() => {
    if (!output) return;
    const task = activeTaskId ? getTask(activeTaskId) : null;
    if (task?.category === 'edit' && taskSelection) {
      onReplace(output);
    } else {
      onInsert(output);
    }
    setOutput('');
    setActiveTaskId(null);
    setTaskSelection('');
  }, [output, activeTaskId, taskSelection, onInsert, onReplace]);

  const handleReject = useCallback(() => {
    setOutput('');
    setActiveTaskId(null);
    setTaskSelection('');
  }, []);

  const handleCustomInputSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (pendingTaskId && customInput.trim()) {
        void runTask(pendingTaskId, customInput.trim());
        setCustomInput('');
      }
    },
    [pendingTaskId, customInput, runTask]
  );

  const handleCustomPromptSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (customInput.trim()) {
        void runTask('custom', customInput.trim());
        setCustomInput('');
      }
    },
    [customInput, runTask]
  );

  const isReady = llmStatus.state === 'ready' && !!llmStatus.modelId;
  const isStarting = llmStatus.state === 'starting' || llmStatus.state === 'loading-model';
  const editTasks = getEditTasks();
  const generateTasks = getGenerateTasks();
  const pendingTask = pendingTaskId ? getTask(pendingTaskId) : null;

  return (
    <div className="fr-ai-panel">
      <header className="fr-ai-header">
        <span className="fr-ai-title">AI Assistant</span>
        <div className="fr-ai-header-actions">
          <span className={`fr-ai-dot fr-ai-dot--${llmStatus.state}`} title={llmStatus.state} />
          <button className="fr-icon-btn" onClick={onClose} title="Close">✕</button>
        </div>
      </header>

      {llmStatus.state === 'stopped' && (
        <div className="fr-ai-setup">
          <p>AI engine is not running.</p>
          <button className="fr-btn primary" onClick={() => void startEngine()}>Start AI Engine</button>
        </div>
      )}

      {llmStatus.state === 'error' && (
        <div className="fr-ai-setup">
          <p className="fr-ai-error">{llmStatus.error}</p>
          <button className="fr-btn primary" onClick={() => void startEngine()}>Retry</button>
        </div>
      )}

      {isStarting && (
        <div className="fr-ai-setup">
          <div className="fr-ai-spinner" />
          <p>{llmStatus.state === 'starting' ? 'Starting AI engine…' : 'Loading model…'}</p>
        </div>
      )}

      {llmStatus.state === 'ready' && !llmStatus.modelId && (
        <div className="fr-ai-setup">
          <p>Engine running. Configure a model in Preferences.</p>
        </div>
      )}

      {isReady && (
        <div className="fr-ai-body">
          <div className="fr-ai-mode-bar">
            <span className={`fr-ai-mode-indicator ${panelMode === 'edit' ? 'active' : ''}`}>
              {panelMode === 'edit'
                ? `Editing selection (${(generating ? taskSelection : selection).length} chars)`
                : 'Generate mode'}
            </span>
          </div>

          {panelMode === 'edit' && !pendingTask && !generating && !output && (
            <div className="fr-ai-actions fr-ai-pills">
              {editTasks.map((task) => (
                <button key={task.id} className="fr-ai-pill" disabled={generating}
                  onClick={() => void runTask(task.id)} title={task.description}>
                  {task.label}
                </button>
              ))}
            </div>
          )}

          {panelMode === 'generate' && !pendingTask && !generating && !output && (
            <div className="fr-ai-actions fr-ai-gen-list">
              {generateTasks.filter((t) => t.id !== 'custom').map((task) => (
                <button key={task.id} className="fr-ai-gen-btn" disabled={generating}
                  onClick={() => void runTask(task.id)} title={task.description}>
                  <span className="fr-ai-gen-label">{task.label}</span>
                  <span className="fr-ai-gen-desc">{task.description}</span>
                </button>
              ))}
            </div>
          )}

          {pendingTask && (
            <form className="fr-ai-input-form" onSubmit={handleCustomInputSubmit}>
              <label className="fr-ai-input-label">{pendingTask.label}</label>
              <input className="fr-ai-input" type="text"
                placeholder={pendingTask.inputPlaceholder ?? 'Describe...'}
                value={customInput} onChange={(e) => setCustomInput(e.target.value)} autoFocus />
              <div className="fr-ai-input-actions">
                <button className="fr-btn primary" type="submit" disabled={!customInput.trim()}>Generate</button>
                <button className="fr-btn" type="button"
                  onClick={() => { setPendingTaskId(null); setCustomInput(''); }}>Cancel</button>
              </div>
            </form>
          )}

          {!pendingTask && !generating && !output && (
            <form className="fr-ai-custom-form" onSubmit={handleCustomPromptSubmit}>
              <input className="fr-ai-input" type="text" placeholder="Ask anything…"
                value={customInput} onChange={(e) => setCustomInput(e.target.value)} disabled={generating} />
              <button className="fr-ai-send-btn" type="submit"
                disabled={generating || !customInput.trim()} title="Send">↵</button>
            </form>
          )}

          {(output || generating) && (
            <div className="fr-ai-output-area">
              {showDiff && (
                <div className="fr-ai-diff">
                  <div className="fr-ai-diff-old">
                    <span className="fr-ai-diff-label">Original</span>
                    <pre>{taskSelection}</pre>
                  </div>
                  <div className="fr-ai-diff-new">
                    <span className="fr-ai-diff-label">Suggested</span>
                    <pre>{output}</pre>
                  </div>
                </div>
              )}

              {!showDiff && (
                <div ref={outputRef} className="fr-ai-output">
                  {output || (generating ? 'Generating…' : '')}
                  {generating && <span className="fr-ai-cursor">▊</span>}
                </div>
              )}

              <div className="fr-ai-output-actions">
                {generating ? (
                  <button className="fr-btn" onClick={handleStop}>Stop</button>
                ) : output ? (
                  <>
                    <button className="fr-btn primary" onClick={handleAccept}>
                      {activeTask?.category === 'edit' && taskSelection ? 'Accept' : 'Insert at cursor'}
                    </button>
                    <button className="fr-btn" onClick={handleReject}>Discard</button>
                    <button className="fr-btn" onClick={() => void navigator.clipboard.writeText(output)}>Copy</button>
                  </>
                ) : null}
              </div>
            </div>
          )}
        </div>
      )}

      {error && <div className="fr-ai-error-bar">{error}</div>}
    </div>
  );
}
