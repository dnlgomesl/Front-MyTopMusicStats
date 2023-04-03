import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App'
import TracksView from './app/views/TracksView/TracksView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TracksView />
  </React.StrictMode>
);
