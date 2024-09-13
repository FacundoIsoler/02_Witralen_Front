import React, { useState, useEffect } from "react";
import useProductStore from "../../../stores/adminStores/productStore";
import styles from "./Products.module.css";

function Products() {
  const { products, productList, postProduct, deleteProduct, loading, error } =
    useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageBase64Array, setImageBase64Array] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    productList();
  }, [productList]);

  const handleAddProduct = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
    setImageBase64Array([]);
    setNewProduct("");
    setCategory("");
    setDescription("");
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const handleSaveProduct = async () => {
    if (
      newProduct.trim() &&
      imageBase64Array.length > 0 &&
      category &&
      description
    ) {
      // Llamar a la función postProduct del store
      await postProduct(newProduct, imageBase64Array, category, description);

      // Limpiar el formulario y cerrar el modal
      handleCloseModal();
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  const handleImageChange = async (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);

    const base64Images = await Promise.all(
      files.map((file) => convertToBase64(file))
    );
    setImageBase64Array(base64Images); // Guardar las imágenes como base64 en un array

    console.log("Imágenes seleccionadas (base64):", base64Images);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    const updatedBase64 = imageBase64Array.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
    setImageBase64Array(updatedBase64);
  };

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Productos</h2>
        <div className={styles.addProduct}>
          <button onClick={handleAddProduct} className={styles.addBtn}>
            Añadir
          </button>
        </div>
      </div>
      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <span>{product.name}</span>
            {product.images &&
              product.images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={product.name}
                  style={{ width: "50px", height: "50px", marginRight: "5px" }}
                />
              ))}
            <div className={styles.actions}>
              <button className={styles.editBtn}>✏️</button>
              <button
                onClick={() => handleDelete(product.id)}
                className={styles.deleteBtn}
              >
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
            <button onClick={handleCloseModal} className={styles.closeBtn}>
              ✖
            </button>
            <h2>Ingresar Producto</h2>
            <label>Nombre del Producto</label>
            <input
              type="text"
              value={newProduct}
              onChange={(e) => setNewProduct(e.target.value)}
              className={styles.input}
            />

            <label>Ingresar Imagen</label>
            <div className={styles.uploadWrapper}>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className={styles.uploadInput}
                id="file-upload"
              />
              <label htmlFor="file-upload" className={styles.uploadBtn}>
                Seleccione imágenes
              </label>
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
                        style={{ width: "100px", height: "100px" }}
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
              className={styles.select}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Seleccione...</option>
              <option value="categoria1">Categoría 1</option>
              <option value="categoria2">Categoría 2</option>
            </select>

            <label>Descripción del Producto</label>
            <textarea
              className={styles.textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button onClick={handleSaveProduct} className={styles.saveBtn}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
