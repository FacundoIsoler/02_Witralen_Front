import React, { useEffect } from "react";
import useProductStore from "../../../stores/adminStores/productStore";
import useServiceStore from "../../../stores/adminStores/serviceStore";
import styles from "./ProductGrid.module.css";
import { useNavigate } from "react-router-dom";

const ProductGrid = () => {
    const { products, loading, error, productList } = useProductStore();
    const { services, serviceList, loading: serviceLoading, error: serviceError } = useServiceStore();
    const navigate = useNavigate();

    useEffect(() => {
        productList();
        serviceList();
    }, [productList, serviceList]);

    const handleProductClick = (product) => {
        navigate(`/products/${product.id}`, { state: { product } });
    };

    const handleServiceClick = (service) => {
        navigate(`/services/${service.id}`, { state: { service } });
    };

    return (
        <div className={styles.container}>
            <h2>Productos</h2>
            {loading ? (
                <div>Cargando Productos...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <div className={styles.grid}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={styles.productCard}
                            onClick={() => handleProductClick(product)}
                        >
                            <img
                                src={
                                    Array.isArray(product.images)
                                        ? product.images[0]
                                        : product.image || "https://via.placeholder.com/150"
                                }
                                alt={product.name}
                            />
                            <p className={styles.productName}>{product.name}</p>
                        </div>
                    ))}
                </div>
            )}
            <h2>Servicios</h2>
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
            )}
        </div>
    );
};

export default ProductGrid;
