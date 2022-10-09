import React from "react";
import { ImSpinner8 } from "react-icons/im";

import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ backgroundColor }) => {
    return (
        <div className={styles.spinnerContainer} style={{ backgroundColor }}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default LoadingSpinner;
