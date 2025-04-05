import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AppWrapper from './AppWrapper.jsx'; // creamos un nuevo archivo para separar lógica del router
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AppWrapper />
    </HashRouter>
  </React.StrictMode>
);
