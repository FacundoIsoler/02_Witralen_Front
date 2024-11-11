import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import video from '../../../assets/video/WitralenSA.mp4';
import s from './Presentation.module.css';
import Navbar from '../../navbar/Navbar.jsx';

const Presentation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={s.container}>
            <Navbar />
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
                        <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                            <ReactPlayer
                                url={video}
                                playing
                                controls
                                width="100%"
                                height="100%"
                                className={s.playerBox}
                            />
                            <button className={s.closeButton} onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Presentation;
