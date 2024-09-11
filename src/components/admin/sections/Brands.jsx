import React, { useEffect } from 'react';
import useBrandStore from '../../../stores/adminStores/brandStore';
import styles from './Brands.module.css';

function Brands() {
    const { brands, brandList, loading, error } = useBrandStore();

    useEffect(() => {
        brandList(); 
    }, [brandList]);

    // const handleDelete = (id) => {
    //     setbrands(brands.filter((brand) => brand.id !== id));
    // };

    // const handleEdit = (id) => {
    //     const brandName = prompt('Edit brand name:', brands.find((p) => p.id === id).name);
    //     if (brandName) {
    //         setbrands(
    //             brands.map((brand) =>
    //                 brand.id === id ? { ...brand, name: brandName } : brand
    //             )
    //         );
    //     }
    // };

    // const handleAddbrand = () => {
    //     if (newbrand.trim()) {
    //         setbrands([...brands, { id: Date.now(), name: newbrand }]);
    //         setNewbrand('');
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
            <h2 className={styles.title}>Marcas</h2>
            <div className={styles.brandList}>
                {brands.map((brand) => (
                    <div key={brand.id} className={styles.brandItem}>
                        <span>{brand.name}</span>
                        <div className={styles.actions}>
                            <button onClick={() => handleEdit(brand.id)} className={styles.editBtn}>
                                ✏️
                            </button>
                            <button onClick={() => handleDelete(brand.id)} className={styles.deleteBtn}>
                                🗑️
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.addbrand}>
                <input
                    type="text"
                    // value={newbrand}
                    // onChange={(e) => setNewbrand(e.target.value)}
                    placeholder="Nuevo brando"
                    className={styles.input}
                />
                {/* <button onClick={handleAddbrand} className={styles.addBtn}>Añadir</button> */}
            </div>
        </div>
    );
}

export default Brands