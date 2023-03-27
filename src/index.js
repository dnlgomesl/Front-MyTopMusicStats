import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App'
import Login from './app/components/login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Login />
  </React.StrictMode>
);
