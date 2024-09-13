import React from 'react';
import styles from './ProductGrid.module.css';

const ProductGrid = () => {
    const products = [
        { id: 1, name: 'Producto 1', img: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Producto 2', img: 'https://via.placeholder.com/150' },
        // Add more products here
    ];

    return (
        <div className={styles.grid}>
            {products.map(product => (
                <div key={product.id} className={styles.productCard}>
                    <img src={product.img} alt={product.name} />
                    <h3>{product.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
