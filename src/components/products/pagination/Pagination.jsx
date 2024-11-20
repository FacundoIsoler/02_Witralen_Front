import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, hasMore, onPageChange }) => {
    return (
        <div className={styles.pagination}>
             <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                {"<"}
            </button>
            <span>{currentPage}</span>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={!hasMore}>
                {">"}
            </button>
        </div>
    );
};

export default Pagination;
