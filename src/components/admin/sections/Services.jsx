import React, { useState, useEffect } from 'react';
import useServiceStore from '../../../stores/adminStores/serviceStore';
import styles from './Services.module.css';

function Services() {
    const { services, serviceList, loading, error } = useServiceStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newService, setNewService] = useState("");
    const [selectedImages, setSelectedImages] = useState([]);
    const [category, setCategory] = useState(""); 
    const [description, setDescription] = useState(""); 

    useEffect(() => {
        serviceList(); 
    }, [serviceList]);

    const handleAddService = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImages([]);
    };

    const handleSaveService = () => {
        if (newService.trim()) {
            setServices([...services, {
                id: Date.now(),
                name: newService,
                images: selectedImages,
                category: category,
                description: description,
            }]);
            setNewService('');
            setSelectedImages([]); 
            setIsModalOpen(false); 
        }
    };

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedImages((prevImages) => [...prevImages, ...files]);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = selectedImages.filter((_, i) => i !== index);
        setSelectedImages(updatedImages);
    };

    if (loading) {
        return <div>Cargando servicios...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Servicios</h2>
                <div className={styles.addService}>
                    <button onClick={handleAddService} className={styles.addBtn}>Añadir</button>
                </div>
            </div>
            <div className={styles.serviceList}>
                {services.map((service) => (
                    <div key={service.id} className={styles.serviceItem}>
                        <span>{service.name}</span>
                        {service.images && service.images.map((image, index) => (
                            <img
                                key={index}
                                src={URL.createObjectURL(image)}
                                alt={service.name}
                                style={{ width: '50px', height: '50px', marginRight: '5px' }}
                            />
                        ))}
                        <div className={styles.actions}>
                            <button className={styles.editBtn}>
                                ✏️
                            </button>
                            <button className={styles.deleteBtn}>
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
                        <h2>Ingresar Servicio</h2>
                        <label>Nombre del Servicio</label>
                        <input
                            type="text"
                            value={newService}
                            onChange={(e) => setNewService(e.target.value)}
                            className={styles.input}
                        />

                        <label>Ingresar Imágenes</label>
                        <div className={styles.uploadWrapper}>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                                className={styles.uploadInput}
                                id="file-upload"
                            />
                            <label htmlFor="file-upload" className={styles.uploadBtn}>Seleccione imágenes</label>
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

                        <label>Ingresar Categoría</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className={styles.select}
                        >
                            <option value="">Seleccione...</option>
                            <option value="categoria1">Categoría 1</option>
                            <option value="categoria2">Categoría 2</option>
                        </select>

                        <label>Descripción del Servicio</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={styles.textarea}
                        ></textarea>

                        <button onClick={handleSaveService} className={styles.saveBtn}>Aceptar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Services;
