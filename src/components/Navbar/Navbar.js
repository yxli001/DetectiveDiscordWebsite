import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div
                className={`${styles.logo} animate__animated animate__fadeInLeft`}
            >
                <a href="/" className={styles.logoLink}>
                    <span className={styles.bold}>Detective</span>Discord
                </a>
            </div>
            <div
                className={`${styles.links} animate__animated  animate__fadeInRight`}
            >
                <a
                    href="https://discord.com/oauth2/authorize?client_id=1028384869404913676&scope=bot&permissions=207878"
                    target="_blank"
                    className={styles.link}
                >
                    Add our bot
                </a>
                <a href="#scanner" className={styles.link}>
                    Scanner
                </a>
            </div>
        </div>
    );
};

export default Navbar;
