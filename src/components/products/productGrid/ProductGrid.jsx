import React, { useEffect } from 'react';
import useProductStore from '../../../stores/adminStores/productStore';
import styles from './ProductGrid.module.css';

const ProductGrid = () => {
    const { products, loading, error, productList } = useProductStore();

    useEffect(() => {
        productList();
    }, [productList]);

    useEffect(() => {
        console.log("Productos actualizados:", products);
    }, [products]);

    if (loading) return <div>Cargando Productos...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                    <img
                        src={
                            Array.isArray(product.images)
                                ? product.images[0]
                                : product.image || 'https://via.placeholder.com/150'
                        }
                        alt={product.name}
                    />
                    <h3>{product.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;