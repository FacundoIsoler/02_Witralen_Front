import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./CloudinaryUpload.module.css";

const CloudinaryUpload = ({ uploadedImages, setUploadedImages }) => {
    const [urlInput, setUrlInput] = useState("");

    const onDrop = useCallback(async (acceptedFiles) => {
        const validFiles = acceptedFiles.slice(0, 5 - uploadedImages.length);

        const uploadPromises = validFiles.map(async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "Witralen");

            try {
                const res = await fetch(
                    "https://api.cloudinary.com/v1_1/alphacode/image/upload",
                    { method: "POST", body: formData }
                );
                const data = await res.json();
                return data.public_id;
            } catch (err) {
                console.error("Upload error:", err);
                return null;
            }
        });

        const ids = await Promise.all(uploadPromises);
        setUploadedImages((prev) => [...prev, ...ids.filter((id) => id)]);
    }, [uploadedImages, setUploadedImages]);

    const handleUrlSubmit = () => {
        const urlParts = urlInput.split("/");
        const publicId = urlParts[urlParts.length - 1].split(".")[0];
        if (publicId) {
            setUploadedImages((prev) => [...prev, publicId]);
            setUrlInput("");
        }
    };

    const handleRemove = (index) => {
        setUploadedImages((prev) => prev.filter((_, i) => i !== index));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/webp': [],
            'image/gif': [],
            'image/svg+xml': [],
        },
    });

    return (
        <div className={styles.uploaderWrapper}>
            <div {...getRootProps()} className={styles.dropzone}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Suelta las imágenes aquí...</p>
                ) : (
                    <p>Arrastra y suelta imágenes aquí, o haz clic para seleccionar</p>
                )}
            </div>

            <div className={styles.manualInput}>
                <input
                    type="text"
                    placeholder="O pega una URL de Cloudinary"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                />
                <button type="button" onClick={handleUrlSubmit}>Agregar URL</button>
            </div>

            {uploadedImages.length > 0 && (
                <div className={styles.previewList}>
                    <p>Vista previa:</p>
                    <div className={styles.imageGrid}>
                        {uploadedImages.map((img, i) => (
                            <div key={i} className={styles.imageWrapper}>
                                <img
                                    src={`https://res.cloudinary.com/alphacode/image/upload/${img}`}
                                    alt="preview"
                                    className={styles.previewImg}
                                />
                                <button onClick={() => handleRemove(i)} className={styles.removeBtn}>✖</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CloudinaryUpload;
