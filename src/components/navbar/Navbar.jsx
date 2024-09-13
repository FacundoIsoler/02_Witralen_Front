import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import s from "./Navbar.module.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={s.navbar}>
            <div className={s.logo}>
                <img src={logo} alt="logo" />
            </div>
            <ul className={s.navLinks}>
                <li className={s.navItem}><a href="#home">Home</a></li>
                <li className={s.navItem}><a href="products">Productos</a></li>
                <li className={s.navItem}><a href="#servicios">Servicios</a></li>
                <li className={s.navItem}><a href="#contacto">Contacto</a></li>
            </ul>
            <div className={s.menuToggle} onClick={toggleMenu}>
                <span className={s.menuIcon}></span>
                <span className={s.menuIcon}></span>
                <span className={s.menuIcon}></span>
            </div>
            {isMenuOpen && (
                <div className={s.mobileMenu}>
                    <ul className={s.mobileNavLinks}>
                        <li className={s.navItem}><a href="#home">Home</a></li>
                        <li className={s.navItem}><a href="products">Productos</a></li>
                        <li className={s.navItem}><a href="#servicios">Servicios</a></li>
                        <li className={s.navItem}><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
