import React from 'react';
import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contacto</h2>
            <div className={styles.contactContainer}>
                <div className={styles.infoSection}>
                    <div className={styles.information}>
                        <h3>Información</h3>
                        <p>Witralen S.A.</p>
                        <p>Acceso sur km. 19.8</p>
                        <p>Mendoza, <strong>Argentina</strong></p>

                        <p className={styles.phone}>
                            <span className={styles.phoneIcon}>🇦🇷</span>
                            +54 9 2615096-2851
                        </p>
                        <p className={styles.phone}>
                            <span className={styles.phoneIcon}>🇨🇱</span>
                            +54 9 2615096-2851
                        </p>

                        <p>
                            <a href="mailto:info@witralensa.com.ar" className={styles.email}>info@witralensa.com.ar</a>
                        </p>
                    </div>

                    <div className={styles.schedule}>
                        <h3>Horario de Atención</h3>
                        <p>Lunes a Viernes: 09:00 a 18:00 hs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
