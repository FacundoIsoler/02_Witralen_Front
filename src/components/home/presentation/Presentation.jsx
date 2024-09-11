import React, { useState } from 'react';
import s from './Presentation.module.css';

const Presentation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={s.presentation}>
            <div className={s.content}>
                <div className={s.rectangle}>
                    <button className={s.playButton} onClick={openModal}>
                        <span className={s.playIcon}>▶</span>
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className={s.modalOverlay} onClick={closeModal}>
                    <div className={s.modal}>
                        <h2>Modal Content</h2>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Presentation;
