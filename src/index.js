import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App'
import ArtistsView from './app/views/ArtistisView/ArtistsView'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ArtistsView />
  </React.StrictMode>
);
