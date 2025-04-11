import React, { useState } from "react";
import useProductStore from "../../../stores/adminStores/productStore";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { productList } = useProductStore();

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    productList({ name: value });
  };

  return (
    <div className={styles.searchBar}>
      {/* <select className={styles.filter}>
        <option value="filtro">Filtro</option>
      </select> */}
      <input
        type="text"
        placeholder="Buscar..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
