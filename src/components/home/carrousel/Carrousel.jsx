import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carrousel.module.css";
import vigia from '../../../assets/marcas/vigia.jpeg';

const products = [
    {
        id: 1,
        name: 'Aire Acondicionado',
        image: vigia,
        link: '/producto/aire-acondicionado',
    },
    {
        id: 2,
        name: 'Servicio 2',
        image: vigia,
        link: '/servicio/2',
    },
    {
        id: 3,
        name: 'Producto 3',
        image: vigia,
        link: '/producto/3',
    },
    {
        id: 4,
        name: 'Servicio 4',
        image: vigia,
        link: '/servicio/4',
    },
    {
        id: 5,
        name: 'Producto 5',
        image: vigia,
        link: '/producto/5',
    }
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 1
    }
};

function Carrousel() {
    return (
        <div className={styles.carouselContainer}>
            <h2 className={styles.title}>Marcas</h2>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={false}
                draggable={false}
                showDots={false} 
                infinite={true}
                partialVisible={false}
                arrows={false}
                autoPlaySpeed={1000}
            >
                {products.map((product) => (
                    <div className={styles.productContainer} key={product.id}>
                        <a href={product.link} className={styles.productLink}>
                            <img
                                src={product.image ? product.image : 'https://via.placeholder.com/300x300'}
                                alt={product.name}
                                className={styles.productImage}
                            />
                        </a>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Carrousel;
