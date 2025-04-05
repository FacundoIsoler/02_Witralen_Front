import { useLocation } from 'react-router-dom';
import App from './App.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

export default function AppWrapper() {
    const location = useLocation();
    const hideNavbar =
        location.pathname === '/login' ||
        location.pathname === '/register' ||
        location.pathname === '/';

    return (
        <>
            {!hideNavbar && <Navbar />}
            <App />
            <Footer />
        </>
    );
}
