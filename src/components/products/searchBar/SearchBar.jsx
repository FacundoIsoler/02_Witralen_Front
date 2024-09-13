import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <select className={styles.filter}>
                <option value="filtro">Filtro</option>
            </select>
            <input type="text" placeholder="Buscar..." className={styles.searchInput} />
        </div>
    );
};

export default SearchBar;
