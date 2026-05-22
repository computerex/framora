import React, { useEffect, useState } from 'react';
import type { FramoraSettings, LlmModelEntry } from '../../preload';
import { THEMES } from '../themes/themes';

interface SettingsPanelProps {
  onClose: () => void;
  onChange: (s: FramoraSettings) => void;
}

export function SettingsPanel({ onClose, onChange }: SettingsPanelProps): JSX.Element {
  const [settings, setSettings] = useState<FramoraSettings | null>(null);
  const [availableModels, setAvailableModels] = useState<LlmModelEntry[]>([]);

  useEffect(() => {
    void window.framora.getSettings().then(setSettings);
    void window.framora.llmScanModels('C:\\models').then(setAvailableModels);
  }, []);

  const update = async (patch: Partial<FramoraSettings>): Promise<void> => {
    const merged = await window.framora.updateSettings(patch);
    setSettings(merged);
    onChange(merged);
  };

  if (!settings) {
    return (
      <div className="fr-modal-backdrop" onClick={onClose}>
        <div className="fr-modal" onClick={(e) => e.stopPropagation()}>
          <div style={{ padding: 24 }}>Loading…</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fr-modal-backdrop" onClick={onClose}>
      <div
        className="fr-modal fr-settings"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="fr-settings-header">
          <h2>Preferences</h2>
          <button className="fr-icon-btn" onClick={onClose} title="Close">✕</button>
        </header>

        <div className="fr-settings-body">
          <section>
            <h3>Appearance</h3>
            <Row label="Theme">
              <select
                value={settings.themeName}
                onChange={(e) => void update({ themeName: e.target.value })}
              >
                {THEMES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.base})
                  </option>
                ))}
              </select>
            </Row>
            <Row label="Light/Dark override">
              <select
                value={settings.theme}
                onChange={(e) => void update({ theme: e.target.value as FramoraSettings['theme'] })}
              >
                <option value="auto">Auto (theme default)</option>
                <option value="light">Force light</option>
                <option value="dark">Force dark</option>
              </select>
            </Row>
            <Row label="Font size">
              <input
                type="number"
                min={10}
                max={28}
                value={settings.fontSize}
                onChange={(e) => void update({ fontSize: Number(e.target.value) })}
              />
              <span className="fr-settings-suffix">px</span>
            </Row>
            <Row label="Font family">
              <input
                className="fr-input"
                value={settings.fontFamily}
                onChange={(e) => void update({ fontFamily: e.target.value })}
              />
            </Row>
          </section>

          <section>
            <h3>Editor</h3>
            <Row label="Show line numbers in source mode">
              <input
                type="checkbox"
                checked={settings.showLineNumbersInSource}
                onChange={(e) => void update({ showLineNumbersInSource: e.target.checked })}
              />
            </Row>
            <Row label="Spellcheck">
              <input
                type="checkbox"
                checked={settings.spellcheck}
                onChange={(e) => void update({ spellcheck: e.target.checked })}
              />
            </Row>
          </section>

          <section>
            <h3>Files</h3>
            <Row label="Auto-save">
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={(e) => void update({ autoSave: e.target.checked })}
              />
            </Row>
            <Row label="Auto-save delay">
              <input
                type="number"
                min={500}
                max={10000}
                step={100}
                value={settings.autoSaveDelayMs}
                onChange={(e) => void update({ autoSaveDelayMs: Number(e.target.value) })}
                disabled={!settings.autoSave}
              />
              <span className="fr-settings-suffix">ms</span>
            </Row>
          </section>

          <section>
            <h3>AI Assistant (dlgo)</h3>
            <Row label="Enable AI assistant">
              <input
                type="checkbox"
                checked={settings.llmEnabled}
                onChange={(e) => void update({ llmEnabled: e.target.checked })}
              />
            </Row>
            <Row label="Model">
              <select
                value={settings.llmModelPath}
                onChange={(e) => void update({ llmModelPath: e.target.value })}
                disabled={!settings.llmEnabled}
              >
                <option value="">Select a model…</option>
                {availableModels
                  .slice()
                  .sort((a, b) => b.sizeMB - a.sizeMB)
                  .map((m) => {
                    const rec = /qwen3\.?5.*9b/i.test(m.name);
                    return (
                      <option key={m.path} value={m.path}>
                        {m.name} ({m.sizeMB} MB){rec ? ' ★ Recommended' : ''}
                      </option>
                    );
                  })}
              </select>
            </Row>
            <Row label="Max tokens">
              <input
                type="number"
                min={64}
                max={4096}
                step={64}
                value={settings.llmMaxTokens}
                onChange={(e) => void update({ llmMaxTokens: Number(e.target.value) })}
                disabled={!settings.llmEnabled}
              />
            </Row>
            <Row label="Temperature">
              <input
                type="number"
                min={0}
                max={2}
                step={0.1}
                value={settings.llmTemperature}
                onChange={(e) => void update({ llmTemperature: Number(e.target.value) })}
                disabled={!settings.llmEnabled}
              />
            </Row>
          </section>

          <section>
            <h3>Custom CSS</h3>
            <textarea
              className="fr-textarea"
              rows={6}
              placeholder="/* Add custom CSS to override theme */"
              value={settings.customCss}
              onChange={(e) => void update({ customCss: e.target.value })}
            />
          </section>

          <section>
            <button
              className="fr-btn"
              onClick={async () => {
                const fresh = await window.framora.resetSettings();
                setSettings(fresh);
                onChange(fresh);
              }}
            >
              Reset to defaults
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }): JSX.Element {
  return (
    <div className="fr-settings-row">
      <label className="fr-settings-label">{label}</label>
      <div className="fr-settings-control">{children}</div>
    </div>
  );
}