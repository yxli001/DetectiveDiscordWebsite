import React from "react";
import styles from "./BoxComponent.module.css";
import { FaThumbsUp } from "react-icons/fa";
import { GiHammerDrop } from "react-icons/gi";
import { MdSwapHoriz, MdOutlineNotificationsActive } from "react-icons/md";

export const BoxComponent = ({ image, text, extra }) => {
    return (
        <div className={`${styles.box} ${extra && styles.extraMargin}`}>
            <div className={styles.image}>
                {image === "thumbUp" ? (
                    <FaThumbsUp size={50} color="#27B8B0" />
                ) : image === "hammer" ? (
                    <GiHammerDrop size={50} color="#27B8B0" />
                ) : image === "swap" ? (
                    <MdSwapHoriz size={50} color="#27B8B0" />
                ) : (
                    <MdOutlineNotificationsActive size={50} color="#27B8B0" />
                )}
            </div>
            <p className={styles.description}>{text}</p>
        </div>
    );
};
