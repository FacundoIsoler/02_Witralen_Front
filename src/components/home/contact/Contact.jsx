import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Contact.module.css';

function Contact() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.title} data-aos="fade-left" data-aos-delay="500">
                <div className={styles.tittleWidth}>
                    <h3 >Contacto</h3>
                </div>
            </div>
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
