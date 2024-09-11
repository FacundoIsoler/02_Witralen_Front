import React, { useEffect } from 'react';
import useProductStore from '../../../stores/adminStores/productStore';
import styles from './Products.module.css';

function Products() {
    const { products, productList, loading, error } = useProductStore();

    useEffect(() => {
        productList(); 
    }, [productList]);


    // const handleDelete = (id) => {
    //     setProducts(products.filter((product) => product.id !== id));
    // };

    // const handleEdit = (id) => {
    //     const productName = prompt('Edit product name:', products.find((p) => p.id === id).name);
    //     if (productName) {
    //         setProducts(
    //             products.map((product) =>
    //                 product.id === id ? { ...product, name: productName } : product
    //             )
    //         );
    //     }
    // };

    // const handleAddProduct = () => {
    //     if (newProduct.trim()) {
    //         setProducts([...products, { id: Date.now(), name: newProduct }]);
    //         setNewProduct('');
    //     }
    // };

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Productos</h2>
            <div className={styles.productList}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productItem}>
                        <span>{product.name}</span>
                        <div className={styles.actions}>
                            <button onClick={() => handleEdit(product.id)} className={styles.editBtn}>
                                ✏️
                            </button>
                            <button onClick={() => handleDelete(product.id)} className={styles.deleteBtn}>
                                🗑️
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.addProduct}>
                <input
                    type="text"
                    // value={newProduct}
                    // onChange={(e) => setNewProduct(e.target.value)}
                    placeholder="Nuevo producto"
                    className={styles.input}
                />
                {/* <button onClick={handleAddProduct} className={styles.addBtn}>Añadir</button> */}
            </div>
        </div>
    );
}

export default Products;
