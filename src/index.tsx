import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function WithContext(){
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

root.render(
  <React.StrictMode>
    <WithContext />
  </React.StrictMode>
);
