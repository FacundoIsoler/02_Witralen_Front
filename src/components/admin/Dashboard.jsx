import React from 'react'
import styles from './Dashboard.module.css'

//Components
import Products from './sections/Products'
// import Services from './sections/Services'
import Brands from './sections/Brands'

function Dashboard() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.one}>
                    <Products />
                </div>
                {/* <div className={styles.two}>
                    <Services />
                </div> */}
                <div className={styles.three}>
                    <Brands />
                </div>
            </div>
        </div>
    )
}

export default Dashboard