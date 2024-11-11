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
                            <h3>VISIÓN</h3>
                            <p>
                                Ofrecer soluciones EN SEGURIDAD PARA EL MOTOR Y NEUMÁTICOS, CLIMATIZACIÓN, CONTROLES DE VELOCIDAD, para todo tipo de vehículo, de acuerdo con nuestras excelentes competencias y junto a nuestros socios estratégicos, distinguiéndonos en el mercado por ofrecer valor y calidad para que nuestros clientes alcancen el éxito.
                            </p>
                        </div>
                        <div
                            className={`${styles.mission} ${missionVisible ? styles.visible : ''}`}
                            ref={missionRef}
                            data-aos="zoom-in"
                        >
                            <h3>MISIÓN</h3>
                            <p>
                                Continuar siendo la solución de confianza en instalación, reparación y mantenimiento de SISTEMAS VIGIA, VIESA, GESTYA, TACÓGRAFOS e instrumental para nuestros clientes. A través de un diagnóstico rápido. Le ofrecemos a nuestros clientes una solución altamente profesional que les permite reducir los tiempos de inutilización de sus vehículos, aumentando su rentabilidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
