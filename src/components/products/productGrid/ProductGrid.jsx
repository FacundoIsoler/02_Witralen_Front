import React, { useEffect } from 'react';
import useProductStore from '../../../stores/adminStores/productStore';
import styles from './ProductGrid.module.css';
import { useNavigate } from 'react-router-dom';


const ProductGrid = () => {
    const { products, loading, error, productList } = useProductStore();
    const navigate = useNavigate();


    useEffect(() => {
        productList();
    }, [productList]);

    useEffect(() => {
        console.log("Productos actualizados:", products);
    }, [products]);

    const handleProductClick = (product) => {
        navigate(`/products/${product.id}`, { state: { product } });
    };

    if (loading) return <div>Cargando Productos...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <div key={product.id} className={styles.productCard} onClick={() => handleProductClick(product)}>
                    <img
                        src={
                            Array.isArray(product.images)
                                ? product.images[0]
                                : product.image || 'https://via.placeholder.com/150'
                        }
                        alt={product.name}
                    />
                    <p className={styles.productName}>{product.name}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;