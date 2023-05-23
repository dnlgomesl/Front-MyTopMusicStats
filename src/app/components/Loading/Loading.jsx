import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="loading-dot" style={{ backgroundColor: '#76b861' }}></div>
          <div className="loading-dot" style={{ backgroundColor: '#76b861' }}></div>
          <div className="loading-dot" style={{ backgroundColor: '#76b861' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
