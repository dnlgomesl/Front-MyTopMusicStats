import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App'
import BarChart from './app/components/BarChart/BarChart';

const root = ReactDOM.createRoot(document.getElementById('root'));
const data = {
  "neo classical metal": 1,
  "progressive metal": 1,
  "adoracao": 3,
  "brazilian gospel": 1,
  "rock gospel brasileiro": 1,
  "neo mellow": 1,
  "singer-songwriter": 1,
  "brazilian hip hop": 2,
  "brazilian emo": 1,
  "brazilian rock": 1,
  "pop rock brasileiro": 1,
  "rock alternativo brasileiro": 1,
  "indie cristao": 2,
  "alternative metal": 1,
  "nu metal": 1,
  "rap metal": 1,
  "funk carioca": 1
}
root.render(
  <React.StrictMode>
    <App />
    <BarChart data={data} />
  </React.StrictMode>
);
