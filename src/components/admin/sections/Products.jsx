import React, { useState, useEffect } from "react";
import useProductStore from "../../../stores/adminStores/productStore";
import useBrandStore from "../../../stores/adminStores/brandStore";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import styles from "./Products.module.css";

const cld = new Cloudinary({
  cloud: {
    cloudName: "alphacode"
  }
});

function Products() {
  const { products, productList, postProduct, deleteProduct, loading, error } = useProductStore();
  const { brands, brandList } = useBrandStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]); // Public IDs de imágenes cargadas
  const [category, setCategory] = useState("");
  const [brandId, setBrandId] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    productList();
  }, [productList]);

  const handleAddProduct = () => {
    setIsModalOpen(true);
    brandList();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUploadedImages([]);
    setName("");
    setCategory("");
    setDescription("");
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const handleSaveProduct = async () => {
    if (
      name.trim() &&
      uploadedImages.length > 0 &&
      category &&
      description &&
      brandId
    ) {
      // Construcción de URLs de Cloudinary a partir de los public_id de `uploadedImages`
      const imageUrls = uploadedImages.map(publicId => 
        `https://res.cloudinary.com/alphacode/image/upload/${publicId}`
      );

      let product = {
        name,
        images: imageUrls,  // Ahora se envían URLs de imágenes en lugar de public_id
        category,
        description,
        brandId,
      };
      console.log("Producto que se envía:", product); // Verifica que contiene URLs
  
      // Envía las URLs de Cloudinary en lugar de las imágenes en base64 o public_id
      await postProduct(name, imageUrls, category, description, brandId);
      
      handleCloseModal();
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    const uploadPromises = files.slice(0, 5 - uploadedImages.length).map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Witralen");

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/alphacode/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        return data.public_id; // Guardar solo el `public_id` de la imagen
      } catch (error) {
        console.error("Error al cargar la imagen:", error);
        return null;
      }
    });

    const newImageIds = await Promise.all(uploadPromises);
    setUploadedImages((prev) => [
      ...prev,
      ...newImageIds.filter((id) => id !== null),
    ]);
  };

  // Generar una imagen transformada para mostrar en el frontend
  const getTransformedImage = (imageId) => {
    return cld
      .image(imageId)
      .format("auto") // Optimiza formato
      .quality("auto") // Optimiza calidad
      .resize(auto().gravity(autoGravity()).width(500).height(500)); // Redimensiona y auto-corta
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
              product.images.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={product.name}
                  style={{ width: "50px", height: "50px", marginRight: "5px" }}
                />
              ))}
            <div className={styles.actions}>
              <button className={styles.editBtn}>✏</button>
              <button
                onClick={() => handleDelete(product.id)}
                className={styles.deleteBtn}
              >
                🗑
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />

            <label>Ingresar Imágenes (máximo 5)</label>
            <div className={styles.uploadWrapper}>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className={styles.uploadInput}
                id="file-upload"
              />
              <label htmlFor="file-upload" className={styles.uploadBtn}>
                Seleccione imágenes
              </label>
            </div>

            {uploadedImages.length > 0 && (
              <div className={styles.preview}>
                <p>Vista previa:</p>
                <div className={styles.imagePreviewContainer}>
                  {uploadedImages.map((imageId, index) => (
                    <div key={index} className={styles.previewItem}>
                      <AdvancedImage
                        cldImg={getTransformedImage(imageId)}
                        alt={`Vista previa ${index}`}
                        style={{ width: "100px", height: "100px" }}
                      />
                      <button
                        onClick={() => setUploadedImages((prev) =>
                          prev.filter((_, i) => i !== index)
                        )}
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

            <label>Marca</label>
            <select
              className={styles.select}
              value={brandId}
              onChange={(e) => setBrandId(e.target.value)}
            >
              <option value="">Seleccione...</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>{brand.name}</option>
              ))}
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
