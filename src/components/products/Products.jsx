import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import SearchBar from './searchBar/SearchBar';
import ProductGrid from './productGrid/ProductGrid';
import Pagination from './pagination/Pagination';
import styles from './Products.module.css';

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className={styles.mainScreen}>
            <Sidebar />
            <div className={styles.content}>
                <SearchBar />
                <ProductGrid />
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Products;
