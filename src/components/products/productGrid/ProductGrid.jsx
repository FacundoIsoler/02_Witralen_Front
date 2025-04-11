import React, { useEffect } from "react";
import useProductStore from "../../../stores/adminStores/productStore";
// import useServiceStore from "../../../stores/adminStores/serviceStore";
import styles from "./ProductGrid.module.css";
import { useNavigate } from "react-router-dom";

const ProductGrid = () => {
    const { products, loading, error, productList } = useProductStore();
    // const { services, serviceList, loading: serviceLoading, error: serviceError } = useServiceStore();
    const navigate = useNavigate();

    useEffect(() => {
        productList();
        // serviceList();
    }, [productList]);

    const handleProductClick = (product) => {
        navigate(`/products/${product.id}`, { state: { product } });
    };

    // const handleServiceClick = (service) => {
    //     navigate(`/services/${service.id}`, { state: { service } });
    // };

    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>

                <h2>Productos</h2>
                {loading ? (
                    <div>Cargando Productos...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    <div className={styles.grid}>
                        {products.map((product) => (
                            <div className={styles.productCard} onClick={() => handleProductClick(product)}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={product.images?.[0] || product.image || "https://via.placeholder.com/150"}
                                        alt={product.name}
                                    />
                                    <div className={styles.overlay}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <circle cx="11" cy="11" r="8" />
                                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                        </svg>
                                    </div>


                                </div>
                                <p className={styles.productName}>{product.name}</p>
                            </div>

                        ))}
                    </div>
                )}
            </div>

            {/* <h2>Servicios</h2>
            {serviceLoading ? (
                <div>Cargando Servicios...</div>
            ) : serviceError ? (
                <div>Error: {serviceError}</div>
            ) : (
                <div className={styles.grid}>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={styles.productCard}
                            onClick={() => handleServiceClick(service)}
                        >
                            <img
                                src={
                                    Array.isArray(service.images)
                                        ? service.images[0]
                                        : service.image || "https://via.placeholder.com/150"
                                }
                                alt={service.name}
                            />
                            <p className={styles.productName}>{service.name}</p>
                        </div>
                    ))}
                </div>
            )} */}
        </div>
    );
};

export default ProductGrid;
