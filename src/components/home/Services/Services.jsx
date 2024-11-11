import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Services.module.css';
import instalacionProfesional from '../../../assets/instalacionProfesional.png';
import asesoramiento from '../../../assets/asesoramiento.png';
import venta from '../../../assets/venta.png';

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.title} data-aos="fade-right" data-aos-delay="500">
                <div className={styles.tittleWidth}>
                    <h2>Nuestros Servicios</h2>
                </div>
            </div>
            <div className={styles.services}>
                {/* Servicio 1 */}
                <div className={`${styles.serviceItem} ${styles.alternateLeft}`}  data-aos="fade-left" data-aos-delay="500">
                    <img src={instalacionProfesional} alt="Instalación Profesional" className={styles.image} />
                    <div className={styles.textContainer}>
                        <h3>Instalación Profesional</h3>
                        <p>Un servicio de alta calidad y confianza, enfocado en brindar soluciones técnicas con la máxima eficiencia y precisión. Este término sugiere un enfoque meticuloso y experto, donde cada detalle cuenta para garantizar que el cliente reciba un resultado impecable.</p>
                    </div>
                </div>

                {/* Servicio 2 */}
                <div className={`${styles.serviceItem} ${styles.alternateRight}`}  data-aos="fade-right" data-aos-delay="800">
                    <div className={styles.textContainer}>
                        <h3>Consultoría y Asesoramiento</h3>
                        <p>Ofrecemos un servicio completo de asesoramiento técnico...</p>
                    </div>
                    <img src={asesoramiento} alt="Consultoría y Asesoramiento" className={styles.image} />
                </div>

                {/* Servicio 3 */}
                <div className={`${styles.serviceItem} ${styles.alternateLeft}`}  data-aos="fade-left" data-aos-delay="500">
                    <img src={venta} alt="Venta y Post-Venta" className={styles.image} />
                    <div className={styles.textContainer}>
                        <h3>Venta y Post-Venta</h3>
                        <p>Te ofrecemos el mejor servicio de venta y post-venta...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
