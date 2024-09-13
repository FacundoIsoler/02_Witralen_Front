import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h2>Categorías</h2>
            <ul className={styles.categoryList}>
                <li>Protector de motor</li>
                <li>Calibrador de neumáticos</li>
                <li>Purgador de aire</li>
                <li>Enfriador ecológico</li>
                <li>Aire acondicionado</li>
                <li>Estufa</li>
                <li>Satelital</li>
                <li>Monitor de neumáticos</li>
            </ul>
            <h2>Marcas</h2>
            <ul className={styles.brandList}>
                <li>Coblow</li>
                <li>Vigia</li>
                <li>Viesa</li>
                <li>Autotrónico</li>
                <li>Gestia</li>
                <li>Vitran</li>
            </ul>
            <h2>Productos Recientes</h2>
        </div>
    );
};

export default Sidebar;
