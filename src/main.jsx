import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import Navbar from './components/navbar/Navbar.jsx';
import './index.css';

function Root() {
  // Obtenemos la ruta actual directamente desde window.location
  const locationPathname = window.location.pathname;

  // Verifica si la ruta es exactamente /login o /register
  const hideNavbar = locationPathname === '/login' || locationPathname === '/register';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <App />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
        <Root />
    </React.StrictMode>
  </Provider>
);
