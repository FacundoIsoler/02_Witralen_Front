import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import './index.css';
import Footer from './components/footer/Footer.jsx';

function Root() {
  // Obtenemos la ruta actual directamente desde window.location
  const locationPathname = window.location.pathname;

  // Verifica si la ruta es exactamente /login o /register
  const hideNavbar = locationPathname === '/login' || locationPathname === '/register' || locationPathname === '/';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <App />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);
