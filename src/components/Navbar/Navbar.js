import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/" className={styles.logoLink}>
                    <span className={styles.bold}>Detective</span>Discord
                </a>
            </div>
            <div className={styles.bot}>
                <a href="#" className={styles.link}>
                    Add our bot
                </a>
            </div>
        </div>
    );
};

export default Navbar;
