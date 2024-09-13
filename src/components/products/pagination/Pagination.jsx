import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className={styles.pagination}>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>{"<"}</button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>{">"}</button>
        </div>
    );
};

export default Pagination;
