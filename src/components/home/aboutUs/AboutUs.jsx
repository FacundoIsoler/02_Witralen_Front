import React from 'react';
import styles from './AboutUs.module.css';

function AboutUs() {
    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <h2 className={styles.heading}>VISIÓN - MISIÓN 2022</h2>
                    <div className={styles.line}></div>
                    <div className={styles.visionMission}>
                        <div className={styles.vision}>
                            <h3>VISIÓN</h3>
                            <p>
                                Ofrecer soluciones EN SEGURIDAD PARA EL MOTOR Y NEUMÁTICOS, CLIMATIZACIÓN, CONTROLES DE VELOCIDAD, para todo tipo de vehículo, de acuerdo con nuestras excelentes competencias y junto a nuestros socios estratégicos, distinguiéndonos en el mercado por ofrecer valor y calidad para que nuestros clientes alcancen el éxito.
                            </p>
                        </div>
                        <div className={styles.mission}>
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
