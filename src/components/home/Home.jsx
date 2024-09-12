import React from 'react'
import Presentation from './presentation/Presentation.jsx'
import styles from './Home.module.css'
import Services from './Services/Services.jsx'



function Home() {
    return (
        <div className={styles.homeContainer}>
            <Presentation />
            <Services />
        </div>
    )
}

export default Home