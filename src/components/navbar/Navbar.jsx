import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import s from "./Navbar.module.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const goTo = (path) => {
        navigate(path);
        setIsMenuOpen(false); // cerramos menú en mobile después de click
    };

    return (
        <nav className={s.navbar}>
            <div className={s.logo} onClick={() => goTo("/")}>
                <img src={logo} alt="logo" />
            </div>
            <ul className={s.navLinks}>
                <li className={s.navItem} onClick={() => goTo("/")}>Home</li>
                <li className={s.navItem} onClick={() => goTo("/products")}>Catálogo</li>
            </ul>
            <div className={s.menuToggle} onClick={toggleMenu}>
                <span className={s.menuIcon}></span>
                <span className={s.menuIcon}></span>
                <span className={s.menuIcon}></span>
            </div>
            {isMenuOpen && (
                <div className={s.mobileMenu}>
                    <ul className={s.mobileNavLinks}>
                        <li className={s.navItem} onClick={() => goTo("/")}>Home</li>
                        <li className={s.navItem} onClick={() => goTo("/products")}>Catálogo</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
