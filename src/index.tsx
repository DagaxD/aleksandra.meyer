import React from 'react';
import ReactDOM from 'react-dom/client';  // Zmieniony import
import App from './App';
import './input.css'; // Jeśli używasz pliku index.css

import './output.css'; // Jeśli używasz pliku index.css


// Tworzymy root i renderujemy aplikację
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
