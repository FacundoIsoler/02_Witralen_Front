import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './AboutUs.module.css';

function AboutUs() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    const { ref: textRef, inView: textVisible } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { ref: visionRef, inView: visionVisible } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { ref: missionRef, inView: missionVisible } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const handleContactButton = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.content}>
                <div
                    className={`${styles.textSection} ${textVisible ? styles.visible : ''}`}
                    ref={textRef}
                >
                    <div className={styles.visionMission}>
                        <div
                            className={`${styles.mission} ${missionVisible ? styles.visible : ''}`}
                            ref={missionRef}
                            data-aos="zoom-in"
                        >
                            <h3 className={styles.heading}>QUIENES SOMOS</h3>
                            <div className={styles.embudoText}>
                                <p className={styles.l1}>Nuestra misión es ser la solución de confianza en la instalación,reparación y mantenimiento de sistemas de seguridad para el motor y neumáticos (VIGIA),climatización (VIESA),</p>
                                <p className={styles.l2}> Tacógrafos (FUL-MAR; VDO; RUTATROL),Satelital (GESTYA); Solución en sistema ad-blue y potenciado (Reprogramación),Scaneo y borrado de fallas, Instrumental (Aceite, aire, temperatura, etc). Nos comprometemos a ofrecer un diagnóstico rápido y profesional,reduciendo los tiempos de inutilización de vehículos y aumentando su rentabilidad.</p>
                                <p className={styles.l3}></p>
                            </div>
                            <button className={styles.contactButton} onClick={handleContactButton}>Contacto</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
