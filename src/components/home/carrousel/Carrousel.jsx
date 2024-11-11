import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carrousel.module.css";

const items = [
    { id: 1, text: 'GET HYPE' },
    { id: 2, icon: true },
    { id: 3, text: 'LEVEL UP' },
    { id: 4, icon: true },
    { id: 5, text: 'GET HYPE' },
    { id: 6, icon: true },
    { id: 7, text: 'LEVEL UP' },
    { id: 8, icon: true }
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7, // Mostrar 7 elementos en escritorio
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 5, // Mostrar 5 elementos en tabletas
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 3, // Mostrar 3 elementos en móviles
        slidesToSlide: 1
    }
};

function Carrousel() {
    return (
        <div className={styles.carouselContainer}>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={false}
                arrows={false}
                autoPlaySpeed={1500}
            >
                {items.map((item) => (
                    <div className={styles.carouselItem} key={item.id}>
                        {item.text ? (
                            <p className={styles.carouselText}>{item.text}</p>
                        ) : (
                            <svg
                                className={styles.carouselIcon}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="white"
                            >
                                <path d="M12 0l3 7h7l-5.5 4.5 2 7-6-4-6 4 2-7L2 7h7z" />
                            </svg>
                        )}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Carrousel;
