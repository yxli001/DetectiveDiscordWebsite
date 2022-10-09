import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div
                className={`${styles.logo} animate__animated animate__fadeInLeft`}
            >
                <a href="/" className={styles.logoLink}>
                    <span className={styles.bold}>Exterma</span>Hate
                </a>
            </div>
            <div
                className={`${styles.links} animate__animated  animate__fadeInRight`}
            >
                <a href="#scanner" className={styles.link}>
                    Hate Scanner
                </a>
                <a href="#detective" className={styles.link}>
                    Detective Discord
                </a>
            </div>
        </div>
    );
};

export default Navbar;
