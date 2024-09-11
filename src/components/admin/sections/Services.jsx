import React, { useState } from 'react';
import styles from './Services.module.css';

function Services() {
    const [services, setServices] = useState([
        { id: 1, name: 'Aire acondicionado' },
        { id: 2, name: 'Motor yamaha' },
        { id: 3, name: 'Bujía' },
    ]);

    const [newService, setNewService] = useState('');

    const handleDelete = (id) => {
        setServices(services.filter((service) => service.id !== id));
    };

    const handleEdit = (id) => {
        const serviceName = prompt('Edit service name:', services.find((p) => p.id === id).name);
        if (serviceName) {
            setServices(
                services.map((service) =>
                    service.id === id ? { ...service, name: serviceName } : service
                )
            );
        }
    };

    const handleAddService = () => {
        if (newService.trim()) {
            setServices([...services, { id: Date.now(), name: newService }]);
            setNewService('');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Servicios</h2>
            <div className={styles.serviceList}>
                {services.map((service) => (
                    <div key={service.id} className={styles.serviceItem}>
                        <span>{service.name}</span>
                        <div className={styles.actions}>
                            <button onClick={() => handleEdit(service.id)} className={styles.editBtn}>
                                ✏️
                            </button>
                            <button onClick={() => handleDelete(service.id)} className={styles.deleteBtn}>
                                🗑️
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.addService}>
                <input
                    type="text"
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    placeholder="Nuevo serviceo"
                    className={styles.input}
                />
                <button onClick={handleAddService} className={styles.addBtn}>Añadir</button>
            </div>
        </div>
    );
}

export default Services