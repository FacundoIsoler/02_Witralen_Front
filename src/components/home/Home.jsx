import React from 'react'
import Presentation from './presentation/Presentation.jsx'
import styles from './Home.module.css'



function Home() {
    return (
        <div className={styles.container}>
            <Presentation />
        </div>
    )
}

export default Home