import React, { useState, useEffect } from 'react';
import useBrandStore from '../../../stores/adminStores/brandStore';
import styles from './Brands.module.css';

function Brands() {
    const { brands, brandList, postBrand, deleteBrand, loading, error } = useBrandStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newBrand, setNewBrand] = useState("");
    const [selectedImages, setSelectedImages] = useState([]); 


    useEffect(() => {
        brandList();
    }, [brandList]);


    const handleDelete = (id) => {
        deleteBrand(id);
    };


    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleAddBrand = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImages([]);
    };

    const handleSaveBrand = async () => {
        if (newBrand.trim() && selectedImages.length > 0) {
            const logo = selectedImages[0]; 
            await postBrand(newBrand, logo); 

            setNewBrand('');
            setSelectedImages([]);
            setIsModalOpen(false);
        } else {
            alert("Por favor, ingrese un nombre de marca y seleccione un logo.");
        }
    };

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedImages(files);

        console.log('Imágenes seleccionadas:', files);
        ;
    };

    const handleRemoveImage = (index) => {
        const updatedImages = selectedImages.filter((_, i) => i !== index);
        setSelectedImages(updatedImages);
    };

    if (loading) {
        return <div>Cargando marcas...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Marcas</h2>
                <div className={styles.addbrand}>
                    <button onClick={handleAddBrand} className={styles.addBtn}>Añadir</button>
                </div>
            </div>
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

            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <button onClick={handleCloseModal} className={styles.closeBtn}>✖</button>
                        <h2>Ingresar Marca</h2>
                        <label>Nombre de la Marca</label>
                        <input
                            type="text"
                            value={newBrand}
                            onChange={(e) => setNewBrand(e.target.value)}
                            className={styles.input}
                        />

                        <label>Ingresar Logo</label>
                        <div className={styles.uploadWrapper}>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                                className={styles.uploadInput}
                                id="file-upload"
                            />
                            <label htmlFor="file-upload" className={styles.uploadBtn}>Seleccione logo</label>
                        </div>

                        {selectedImages.length > 0 && (
                            <div className={styles.preview}>
                                <p>Vista previa:</p>
                                <div className={styles.imagePreviewContainer}>
                                    {selectedImages.map((image, index) => (
                                        <div key={index} className={styles.previewItem}>
                                            <img
                                                src={URL.createObjectURL(image)}
                                                alt={`Vista previa ${index}`}
                                                style={{ width: '100px', height: '100px' }}
                                            />
                                            <button
                                                onClick={() => handleRemoveImage(index)}
                                                className={styles.removeImageBtn}
                                            >
                                                ✖
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <button onClick={handleSaveBrand} className={styles.saveBtn}>Aceptar</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Brands