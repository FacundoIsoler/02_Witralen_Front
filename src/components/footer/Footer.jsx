import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <p>Acceso sur km. 19.8</p>
                <p>Mendoza, Argentina</p>
                <p>🇦🇷 +54 9 2615096-2851</p>
                <p>🇨🇱 +54 9 2615096-2851</p>
                <a href="mailto:info@witralensa.com.ar" className={styles.email}>
                    info@witralensa.com.ar
                </a>
            </div>
        </footer>
    );
}

export default Footer;
