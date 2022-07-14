import React from 'react';
import ReactDOM from 'react-dom/client';
import MainView from './views/MainView/MainView';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MainView/>
  </React.StrictMode>
);
