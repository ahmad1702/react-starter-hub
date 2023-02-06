import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import ShortcutsProvider from './providers/ShortcutProvider';
import ThemeProvider from './providers/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ShortcutsProvider>
        <App />
      </ShortcutsProvider>
    </ThemeProvider>
  </React.StrictMode>
);