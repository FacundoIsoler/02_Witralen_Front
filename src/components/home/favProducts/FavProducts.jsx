import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./FavProducts.module.css";
import aireAcondicionado from '../../../assets/productos/aireAcondicionado.png';

const products = [
    {
        id: 1,
        name: 'Aire Acondicionado',
        image: aireAcondicionado,
        link: '/producto/aire-acondicionado',
    },
    {
        id: 2,
        name: 'servicio 2',
        image: '',
        link: '/servicio/2',
    },
    {
        id: 3,
        name: 'Producto 3',
        image: '',
        link: '/producto/3',
    },
    {
        id: 4,
        name: 'servicio 4',
        image: '',
        link: '/servicio/4',
    },
    {
        id: 5,
        name: 'Producto 5',
        image: '',
        link: '/producto/5',
    }
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 1
    }
};

const FavProducts = () => {
    return (
        <div className={styles.carouselContainer}>
            <h2 className={styles.title}>Novedades</h2>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={false}
                dotListClass={styles.customDotListStyle}
            >
                {products.map((product, index) => (
                    <div className={styles.productCard} key={index}>
                        <img
                            src={product.image ? product.image : 'https://via.placeholder.com/300x300'}
                            alt={product.name}
                            className={styles.productImage}
                        />
                        <h3 className={styles.productName}>{product.name}</h3>
                        <button
                            className={styles.productButton}
                            onClick={() => window.location.href = product.link}
                        >
                            Ver Producto
                        </button>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default FavProducts;
