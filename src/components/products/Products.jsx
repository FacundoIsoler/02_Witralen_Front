import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar/Sidebar';
import SearchBar from './searchBar/SearchBar';
import ProductGrid from './productGrid/ProductGrid';
import Pagination from './pagination/Pagination';
import useProductStore from '../../stores/adminStores/productStore';
import styles from './Products.module.css';

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { productList, hasMore, getCategories } = useProductStore();
    const itemsPerPage = 10;

    useEffect(() => {
        productList({}, currentPage, itemsPerPage);
        getCategories();
    }, [currentPage, productList]);

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
                    hasMore={hasMore}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Products;
