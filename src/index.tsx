import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ShortcutsProvider from './providers/ShortcutProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ShortcutsProvider>
      <App />
    </ShortcutsProvider>
  </React.StrictMode>
);