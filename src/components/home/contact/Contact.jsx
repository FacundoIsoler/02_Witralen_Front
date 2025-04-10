import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Contact.module.css';

function Contact() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id="contact" className={styles.container}>
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.794016587764!2d-68.87546642347601!3d-33.06188937771985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e75a64d8abf9f%3A0xe1dc31a98728f2b6!2sWitralen%20S.A!5e0!3m2!1ses!2sar!4v1726253179823!5m2!1ses!2sar"
                    width="150%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.iframe}
                ></iframe>
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.infoSection}>
                    <div className={styles.information}>
                        <h3>Información</h3>
                        <p className={styles.item}>Witralen S.A.</p>
                        <p className={styles.item}>Acceso sur km. 19.8</p>
                        <p className={styles.item}>Mendoza, Argentina</p>
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
                        <p>
                            <a href="https://www.instagram.com/witralen.s.a?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className={styles.email}>@witralen.s.a</a>
                        </p>
                    </div>

                    <div className={styles.schedule}>
                        <h3>Horario de Atención</h3>
                        <p className={styles.item}>Lunes a Viernes: 09:00 a 18:00 hs</p>
                        <p className={styles.item}>Sábados y Domingos cerrado</p>
                    </div>
                    <div className={styles.schedule}>
                        <h3>URGENCIAS</h3>
                        <p className={styles.item}>GUARDIA TELEFONICA TACOGRAFOS LAS 24HS DE LUNES A DOMINGOS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
