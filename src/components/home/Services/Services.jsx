import React, { useState } from 'react';
import styles from './Services.module.css';
import instalacionProfesional from '../../../assets/instalacionProfesional.png';
import asesoramiento from '../../../assets/asesoramiento.png';
import venta from '../../../assets/venta.png';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleClick = (service) => {
        if (selectedService === service) {
            setSelectedService(null);
        } else {
            setSelectedService(service); 
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Nuestros Servicios</h2>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.services}>
                {/* Servicio 1 */}
                <div
                    className={`${styles.serviceItem} ${selectedService === 'instalacion' ? `${styles.selectedService} ${styles.move0}` : ''} ${selectedService && selectedService !== 'instalacion' ? styles.hidden : ''}`}
                    onClick={() => handleClick('instalacion')}
                >
                    <div className={styles.imgH3}>
                        <img src={instalacionProfesional} alt="Instalación Profesional" className={styles.image} />
                        <h3>Instalación Profesional</h3>
                    </div>
                    {selectedService === 'instalacion' && (
                        <div className={styles.textContainer}>
                            <p>Este es el servicio de instalación profesional que ofrecemos...</p>
                        </div>
                    )}
                </div>

                {/* Servicio 2 */}
                <div
                    className={`${styles.serviceItem} ${selectedService === 'asesoramiento' ? `${styles.selectedService} ${styles.move50}` : ''} ${selectedService && selectedService !== 'asesoramiento' ? styles.hidden : ''}`}
                    onClick={() => handleClick('asesoramiento')}
                >
                    <div className={styles.imgH3}>
                        <img src={asesoramiento} alt="Consultoría y Asesoramiento" className={styles.image} />
                        <h3>Consultoría y Asesoramiento</h3>
                    </div>

                    {selectedService === 'asesoramiento' && (
                        <div className={styles.textContainer}>
                            <p>Ofrecemos un servicio completo de asesoramiento técnico...</p>
                        </div>
                    )}
                </div>

                {/* Servicio 3 */}
                <div
                    className={`${styles.serviceItem} ${selectedService === 'venta' ? `${styles.selectedService} ${styles.move100}` : ''} ${selectedService && selectedService !== 'venta' ? styles.hidden : ''}`}
                    onClick={() => handleClick('venta')}
                >
                    <div className={styles.imgH3}>
                        <img src={venta} alt="Venta y Post-Venta" className={styles.image} />
                        <h3>Venta y Post-Venta</h3>
                    </div>
                    {selectedService === 'venta' && (
                        <div className={styles.textContainer}>
                            <p>Te ofrecemos el mejor servicio de venta y post-venta...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
