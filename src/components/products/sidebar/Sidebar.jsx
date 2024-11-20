import React, { useEffect } from "react";
import useBrandStore from "../../../stores/adminStores/brandStore";
import useProductStore from "../../../stores/adminStores/productStore";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { brands, brandList, loading, error } = useBrandStore((state) => ({
    brands: state.brands,
    brandList: state.brandList,
    loading: state.loading,
    error: state.error,
  }));

  const { productList } = useProductStore();

  useEffect(() => {
    brandList();
  }, [brandList]);

  const handleBrandClick = (brandId) => {
    productList({ brandId });
  };

  const handleCategoryClick = (category) => {
    productList({ category });
  };

  return (
    <div className={styles.sidebar}>
      <h2>Categorías</h2>
      <ul className={styles.categoryList}>
      {[
          "Protector de motor",
          "Calibrador de neumáticos",
          "Purgador de aire",
          "Enfriador ecológico",
          "Aire acondicionado",
          "Estufa",
          "Satelital",
          "Monitor de neumáticos",
        ].map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={styles.categoryItem}
          >
            {category}
          </li>
        ))}
      </ul>
      <h2>Marcas</h2>
      {loading ? (
        <p>Cargando marcas...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className={styles.brandList}>
          {brands.map((brand) => (
            <li
              key={brand.id}
              onClick={() => handleBrandClick(brand.id)}
              className={styles.brandItem}
            >
              {brand.name}
            </li>
          ))}
        </ul>
      )}
      <h2>Productos Recientes</h2>
    </div>
  );
};

export default Sidebar;
