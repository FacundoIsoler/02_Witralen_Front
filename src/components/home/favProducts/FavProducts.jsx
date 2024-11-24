import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./FavProducts.module.css";
import aireAcondicionado from '../../../assets/productos/aireAcondicionado.png';
import caldera from '../../../assets/productos/caldera.png';
import camara from '../../../assets/productos/camara.jpg';
import gestya from '../../../assets/servicios/gestya.png';

const products = [
    { id: 1, name: 'Aire Acondicionado', image: aireAcondicionado, link: '/producto/aire-acondicionado' },
    { id: 2, name: 'Gestya', image: gestya, link: '/servicios/gestya' },
    { id: 3, name: 'Caldera', image: caldera, link: '/producto/caldera' },
    { id: 4, name: 'Aire Acondicionado', image: aireAcondicionado, link: '/producto/aire-acondicionado' },
    { id: 5, name: 'Camara', image: camara, link: '/producto/camara' }
];

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 767, min: 464 }, items: 1, slidesToSlide: 1 }
};

// Flecha izquierda personalizada
const CustomLeftArrow = ({ onClick }) => {
    return (
        <div className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`} onClick={onClick}>
            {"<"}
        </div>
    );
};

// Flecha derecha personalizada
const CustomRightArrow = ({ onClick }) => {
    return (
        <div className={`${styles.carouselArrow} ${styles.carouselArrowRight}`} onClick={onClick}>
            {">"}
        </div>
    );
};

const FavProducts = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Novedades</h3>
            <div className={styles.carouselContainer}>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    infinite={true}
                    partialVisible={false}
                    dotListClass={styles.customDotListStyle}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />
                    }
                >
                    {products.map((product, index) => (
                        <div className={styles.productCard} key={index}>
                            <img
                                src={product.image ? product.image : 'https://via.placeholder.com/300x300'}
                                alt={product.name}
                                className={styles.productImage}
                            />
                            <h2 className={styles.productName}>{product.name}</h2>
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
        </div>
    );
};

export default FavProducts;
