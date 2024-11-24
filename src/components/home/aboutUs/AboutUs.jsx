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

    // Verificar si la visibilidad está funcionando correctamente
    console.log("Text Section Visible:", textVisible);
    console.log("Vision Section Visible:", visionVisible);
    console.log("Mission Section Visible:", missionVisible);

    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.content}>
                <div
                    className={`${styles.textSection} ${textVisible ? styles.visible : ''}`}
                    ref={textRef}
                >
                    <div className={styles.visionMission}>
                        <div
                            className={`${styles.vision} ${visionVisible ? styles.visible : ''}`}
                            ref={visionRef}
                            data-aos="zoom-in"
                        >
                            <h3 className={styles.heading}>VISIÓN</h3>
                            <p className={styles.text}>
                                Ofrecer soluciones EN SEGURIDAD PARA EL MOTOR Y NEUMÁTICOS, CLIMATIZACIÓN, CONTROLES DE VELOCIDAD, para todo tipo de vehículo, de acuerdo con nuestras excelentes competencias y junto a nuestros socios estratégicos, distinguiéndonos en el mercado por ofrecer valor y calidad para que nuestros clientes alcancen el éxito.
                            </p>
                        </div>
                        <div
                            className={`${styles.mission} ${missionVisible ? styles.visible : ''}`}
                            ref={missionRef}
                            data-aos="zoom-in"
                        >
                            <h3 className={styles.heading}>QUIENES SOMOS</h3>
                            <p className={styles.text}>
                            Nuestra misión es ser la solución de confianza en la instalación, reparación y mantenimiento de sistemas de seguridad para el motor y neumáticos (VIGIA), climatización (VIESA), Tacógrafos(FUL-MAR;VDO;RUTATROL), Satelital(GESTYA); Solución en sistema ad-blue y potenciado(Reprogramación),Scaneo y borrado de fallas,Instrumental (Reparación Aceite, aire, temperatura, velocímetro, cuenta vuelta, medidor de combustible, etc). 
                            . Nos comprometemos a ofrecer un diagnóstico rápido y profesional que permita a nuestros clientes reducir los tiempos de inutilización de sus vehículos, aumentando así su rentabilidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
