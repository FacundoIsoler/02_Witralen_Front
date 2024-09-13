import React from 'react'
import Presentation from './presentation/Presentation.jsx'
import styles from './Home.module.css'
import Services from './Services/Services.jsx'
import FavProducts from './favProducts/FavProducts.jsx'
import Contact from './contact/Contact.jsx'
import Map from './map/Map.jsx'



function Home() {
    return (
        <div className={styles.homeContainer}>
            <Presentation />
            <Services />
            <FavProducts />
            <Contact />
            <Map />
        </div>
    )
}

export default Home