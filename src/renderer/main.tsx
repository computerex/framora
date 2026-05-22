import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/global.css';
import './styles/markdown.css';
import './styles/sidebar.css';
import './styles/settings.css';
import './styles/extras.css';
import './styles/ai.css';
import './styles/templates.css';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);