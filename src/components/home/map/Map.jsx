import React from 'react';
import styles from './Map.module.css';

function Map() {
    return (
        <div className={styles.container}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.794016587764!2d-68.87546642347601!3d-33.06188937771985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e75a64d8abf9f%3A0xe1dc31a98728f2b6!2sWitralen%20S.A!5e0!3m2!1ses!2sar!4v1726253179823!5m2!1ses!2sar" width="800" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Map;
