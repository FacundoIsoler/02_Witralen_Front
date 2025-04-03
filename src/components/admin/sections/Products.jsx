import React, { useState, useEffect } from "react";
import useProductStore from "../../../stores/adminStores/productStore";
import useBrandStore from "../../../stores/adminStores/brandStore";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import CloudinaryUpload from "../../common/CloudinaryUpload";
import styles from "./Products.module.css";

const cld = new Cloudinary({ cloud: { cloudName: "alphacode" } });

function Products() {
  const {
    products,
    productList,
    postProduct,
    updateProduct,
    deleteProduct,
    loading,
    error,
  } = useProductStore();

  const { brands, brandList } = useBrandStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [name, setName] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [category, setCategory] = useState("");
  const [brandId, setBrandId] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    productList();
  }, [productList]);

  const handleAddProduct = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    brandList();
    resetForm();
  };

  const handleEdit = (id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setName(product.name);
      setUploadedImages(product.images || []);
      setCategory(product.category);
      setBrandId(product.brandId);
      setDescription(product.description);
      setSelectedProductId(id);
      setIsEditing(true);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setUploadedImages([]);
    setName("");
    setCategory("");
    setDescription("");
  };

  const handleDelete = (id) => deleteProduct(id);

  const handleSaveProduct = async () => {
    if (name.trim() && uploadedImages.length > 0 && category && description && brandId) {
      const imageUrls = uploadedImages.map((id) =>
        typeof id === "string" && id.startsWith("http")
          ? id
          : `https://res.cloudinary.com/alphacode/image/upload/${id}`
      );
      

      if (isEditing && selectedProductId) {
        await updateProduct(selectedProductId, name, imageUrls, category, description, brandId);
      } else {
        await postProduct(name, imageUrls, category, description, brandId);
      }

      handleCloseModal();
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  const getTransformedImage = (imageId) =>
    cld.image(imageId).format("auto").quality("auto").resize(auto().gravity(autoGravity()).width(500).height(500));

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Productos</h2>
        <div className={styles.addProduct}>
          <button onClick={handleAddProduct} className={styles.addBtn}>Añadir</button>
        </div>
      </div>

      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <span>{product.name}</span>
            {product.images && product.images.map((img, i) => (
              <img key={i} src={img} alt={product.name} style={{ width: "50px", height: "50px", marginRight: "5px" }} />
            ))}
            <div className={styles.actions}>
              <button onClick={() => handleEdit(product.id)} className={styles.editBtn}>✏</button>
              <button onClick={() => handleDelete(product.id)} className={styles.deleteBtn}>🗑</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button onClick={handleCloseModal} className={styles.closeBtn}>✖</button>
            <h2>{isEditing ? "Editar Producto" : "Ingresar Producto"}</h2>

            <label>Nombre del Producto</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />

            <label>Ingresar Imágenes (máximo 5)</label>
            <CloudinaryUpload uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} />

            <label>Ingresar Categoría</label>
            <select
              className={styles.select}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Seleccione...</option>
              <option value="Protector de motor">Protector de motor</option>
              <option value="Calibrador de neumáticos">Calibrador de neumáticos</option>
              <option value="Purgador de aire">Purgador de aire</option>
              <option value="Enfriador ecológico">Enfriador ecológico</option>
              <option value="Aire acondicionado">Aire acondicionado</option>
              <option value="Estufa">Estufa</option>
              <option value="Satelital">Satelital</option>
              <option value="Monitor de neumáticos">Monitor de neumáticos</option>
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
              {isEditing ? "Actualizar" : "Aceptar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;