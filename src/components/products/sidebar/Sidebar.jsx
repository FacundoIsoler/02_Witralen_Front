import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useBrandStore from "../../../stores/adminStores/brandStore";
import useProductStore from "../../../stores/adminStores/productStore";
import useRandomProductStore from "../../../stores/randomProductStore";
import useServiceStore from "../../../stores/adminStores/serviceStore";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const { brands, brandList, loading, error } = useBrandStore((state) => ({
    brands: state.brands,
    brandList: state.brandList,
    loading: state.loading,
    error: state.error,
  }));

  const { productList, getCategories, categories } = useProductStore((state) => ({
    categories: state.categories,
    productList: state.productList,
    getCategories: state.getCategories,
  }));

  const { services, serviceList, loading: serviceLoading, error: serviceError } = useServiceStore((state) => ({
    services: state.services,
    serviceList: state.serviceList,
    loading: state.loading,
    error: state.error,
  }));

  const {
    randomProducts,
    fetchRandomProducts,
    loading: randomLoading,
    error: randomError,
  } = useRandomProductStore((state) => ({
    randomProducts: state.randomProducts,
    fetchRandomProducts: state.fetchRandomProducts,
    loading: state.loading,
    error: state.error,
  }));

  useEffect(() => {
    async function initializeSidebar() {
      await brandList();
      await fetchRandomProducts();
      getCategories();
      serviceList(); // Load services
    }
    initializeSidebar();
  }, [brandList, fetchRandomProducts, getCategories, serviceList]);

  const applyFilters = (category, brandId) => {
    const filters = {};
    if (category && category !== "all") filters.category = category;
    if (brandId && brandId !== "all") filters.brandId = brandId;

    productList(filters);
    navigate("/products", { state: { filterType: "mixed", filters } });
  };

  const applyServiceFilters = (brandId) => {
    const filters = {};
    if (brandId && brandId !== "all") filters.brandId = brandId;

    serviceList(filters);
    navigate("/services", { state: { filterType: "services", filters } });
  };

  const handleBrandClick = (brandId) => {
    setSelectedBrand(brandId);
    applyFilters(selectedCategory, brandId);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    applyFilters(category, selectedBrand);
  };

  const handleAllCategoriesClick = () => {
    setSelectedCategory("all");
    applyFilters("all", selectedBrand);
  };

  const handleAllBrandsClick = () => {
    setSelectedBrand("all");
    applyFilters(selectedCategory, "all");
  };

  const handleServiceBrandClick = (brandId) => {
    setSelectedBrand(brandId);
    serviceList({ brandId });
  };

  const handleAllServicesClick = () => {
    setSelectedBrand("all");
    applyServiceFilters("all");
  };

  const handleProductClick = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.categoryTittle}>Categorías</h2>
      <ul className={styles.categoryList}>
        <li
          onClick={handleAllCategoriesClick}
          className={`${styles.categoryItem} ${
            selectedCategory === "all" ? styles.selectedItem : ""
          }`}
        >
          Todas las categorías
        </li>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`${styles.categoryItem} ${
              selectedCategory === category ? styles.selectedItem : ""
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
      <h2 className={styles.categoryTittle}>Marcas</h2>
      {loading ? (
        <p>Cargando marcas...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className={styles.brandList}>
          <li
            onClick={handleAllBrandsClick}
            className={`${styles.brandItem} ${
              selectedBrand === "all" ? styles.selectedItem : ""
            }`}
          >
            Todas las marcas
          </li>
          {brands.map((brand) => (
            <li
              key={brand.id}
              onClick={() => handleBrandClick(brand.id)}
              className={`${styles.brandItem} ${
                selectedBrand === brand.id ? styles.selectedItem : ""
              }`}
            >
              {brand.name}
            </li>
          ))}
        </ul>
      )}
      <h2 className={styles.categoryTittle}>Servicios</h2>
      {serviceLoading ? (
        <p>Cargando servicios...</p>
      ) : serviceError ? (
        <p>Error: {serviceError}</p>
      ) : (
        <ul className={styles.brandList}>
          <li
            onClick={handleAllServicesClick}
            className={`${styles.brandItem} ${
              selectedBrand === "all" ? styles.selectedItem : ""
            }`}
          >
            Todos los servicios
          </li>
          {brands.map((brand) => (
            <li
              key={brand.id}
              onClick={() => handleServiceBrandClick(brand.id)}
              className={`${styles.brandItem} ${
                selectedBrand === brand.id ? styles.selectedItem : ""
              }`}
            >
              {brand.name}
            </li>
          ))}
        </ul>
      )}
      <h2 className={styles.categoryTittle}>Productos Recomendados</h2>
      {randomLoading ? (
        <p>Cargando productos...</p>
      ) : randomError ? (
        <p>Error: {randomError}</p>
      ) : (
        <ul className={styles.productList}>
          {randomProducts.map((product) => (
            <li
              key={product.id}
              onClick={() => handleProductClick(product)}
              className={styles.productItem}
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
