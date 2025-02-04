import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals (optional)
reportWebVitals();
