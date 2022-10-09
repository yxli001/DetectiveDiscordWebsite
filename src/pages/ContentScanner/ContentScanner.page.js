import React, { useState } from "react";

import axios from "axios";
import styles from "./ContentScanner.module.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function validURL(str) {
    var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // fragment locator
    return !!pattern.test(str);
}

const ContentScanner = () => {
    // box animation states
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);
    const [box5, setBox5] = useState(false);
    const [box6, setBox6] = useState(false);
    const [box7, setBox7] = useState(false);
    const [box8, setBox8] = useState(false);
    const [box9, setBox9] = useState(false);
    const [box10, setBox10] = useState(false);
    const boxes = [
        [box1, setBox1],
        [box2, setBox2],
        [box3, setBox3],
        [box4, setBox4],
        [box5, setBox5],
        [box6, setBox6],
        [box7, setBox7],
        [box8, setBox8],
        [box9, setBox9],
        [box10, setBox10],
    ];

    const [webPageURL, setWebPageURL] = useState("");
    const [labelsState, setLabelsState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState(false);
    const [bounce, setBounce] = useState(false);
    const [hateSpeechState, setHateSpeechState] = useState("false");
    const [percentState, setPercentState] = useState(null);

    const handleSubmit = async () => {
        if (!validURL(webPageURL)) {
            if (warning) {
                setBounce(true);
                setTimeout(() => setBounce(false), 500);
            }

            return setWarning(true);
        }

        setWarning(false);
        setLoading(true);

        try {
            for (let i = 0; i < 10; i++) {
                boxes[i][1](false);
            }

            const res = await axios.post(
                "https://detective-discord-1.herokuapp.com/api/scanner/",
                {
                    webPageURL: webPageURL,
                }
            );

            setLabelsState(res.data.labels);
            setHateSpeechState(res.data.percent > 30);
            setPercentState(res.data.percent);

            let counter = 0;
            const interval = setInterval(() => {
                if (res.data.percent == 100) {
                    clearInterval(interval);
                    return;
                }

                if (counter === (100 - res.data.percent) / 10 - 1) {
                    clearInterval(interval);
                }

                boxes[counter][1](true);
                counter++;
            }, 300);

            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div id="scanner" className={styles.container}>
            <div className={styles.mainContentContainer}>
                <h1 className={styles.mainText}>
                    See how explicit a webpage is in seconds
                </h1>
                <input
                    type="text"
                    className={styles.webPageInput}
                    onChange={(e) => setWebPageURL(e.target.value)}
                    value={webPageURL}
                    placeholder="Paste in a website link here"
                />
                <button
                    className={styles.submitButton}
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    Submit
                </button>
                {warning && (
                    <div
                        className={`${styles.warning} ${
                            bounce && "animate__animated animate__shakeX"
                        }`}
                    >
                        Please enter a valid URL!
                    </div>
                )}
            </div>
            <div className={styles.bottomContentContainer}>
                <div className={styles.boxContainer}>
                    <div className={styles.flipBox}>
                        <div
                            className={`${styles.flipBoxInner} ${
                                box1
                                    ? styles.flipBoxInnerAnimationOn
                                    : styles.flipBoxInnerAnimationOff
                            }`}
                        >
                            <div className={styles.flipBoxFront}></div>
                            <div className={styles.flipBoxBack}></div>
                        </div>
                    </div>
                    <div className={styles.flipBox}>
                        <div
                            className={`${styles.flipBoxInner} ${
                                box2
                                    ? styles.flipBoxInnerAnimationOn
                                    : styles.flipBoxInnerAnimationOff
                            }`}
                        >
                            <div className={styles.flipBoxFront}></div>
                            <div className={styles.flipBoxBack}></div>
                        </div>
                    </div>
                    <div className={styles.flipBox}>
                        <div
                            className={`${styles.flipBoxInner} ${
                                box3
                                    ? styles.flipBoxInnerAnimationOn
                                    : styles.flipBoxInnerAnimationOff
                            }`}
                        >
                            <div className={styles.flipBoxFront}></div>
                            <div className={styles.flipBoxBack}></div>
                        </div>
                    </div>
                    <div className={styles.flipBox}>
                        <div
                            className={`${styles.flipBoxInner} ${
                                box4
                                    ? styles.flipBoxInnerAnimationOn
                                    : styles.flipBoxInnerAnimationOff
                            }`}
                        >
                            <div className={styles.flipBoxFront}></div>
                            <div className={styles.flipBoxBack}></div>
                        </div>
                    </div>
                    <div className={styles.flipBox}>
                        <div
                            className={`${styles.flipBoxInner} ${
                                box5
                                    ? styles.flipBoxInnerAnimationOn
                                    : styles.flipBoxInnerAnimationOff
                            }`}
                        >
                            <div className={styles.flipBoxFront}></div>
                            <div className={styles.flipBoxBack}></div>
                        </div>
                    </div>
                    <div className={styles.flipBox}>
                        <div
                            className={`${styles.flipBoxInner} ${
                                box6
                                    ? styles.flipBoxInnerAnimationOn
                                    : styles.flipBoxInnerAnimationOff
                            }`}
                        >
                            <div className={styles.flipBoxFront}></div>
                            <div className={styles.flipBoxBack}></div>
                        </div>
                    </div>
                    <div className={styles.flipBox}>
                        <div
                            className={`${styles.flipBoxInner} ${
                                box7
                                    ? styles.flipBoxInnerAnimationOn
                                    : styles.flipBoxInnerAnimationOff
                            }`}
                        >
                            <div className={styles.flipBoxFront}></div>
                            <div className={styles.flipBoxBack}></div>
                        </div>
                    </div>
                    <div className={styles.flipBox}>
                        <div
                            className={`${styles.flipBoxInner} ${
                                box8
                                    ? styles.flipBoxInnerAnimationOn
                                    : styles.flipBoxInnerAnimationOff
                            }`}
                        >
                            <div className={styles.flipBoxFront}></div>
                            <div className={styles.flipBoxBack}></div>
                        </div>
                    </div>
                    <div className={styles.flipBox}>
                        <div
                            className={`${styles.flipBoxInner} ${
                                box9
                                    ? styles.flipBoxInnerAnimationOn
                                    : styles.flipBoxInnerAnimationOff
                            }`}
                        >
                            <div className={styles.flipBoxFront}></div>
                            <div className={styles.flipBoxBack}></div>
                        </div>
                    </div>
                    <div className={styles.flipBox}>
                        <div
                            className={`${styles.flipBoxInner} ${
                                box10
                                    ? styles.flipBoxInnerAnimationOn
                                    : styles.flipBoxInnerAnimationOff
                            }`}
                        >
                            <div className={styles.flipBoxFront}></div>
                            <div className={styles.flipBoxBack}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.codeBackground}>
                    {!loading ? (
                        <>
                            {"{"}
                            <p className={styles.result}>
                                <span className={styles.indentation}>
                                    <span className={styles.attribute}>
                                        hate_speech
                                    </span>
                                    :{" "}
                                    <span className={styles.value}>
                                        {hateSpeechState.toString()}
                                    </span>
                                    ,
                                </span>
                                <br />
                                <span className={styles.indentation}>
                                    <span className={styles.attribute}>
                                        labels
                                    </span>
                                    : [
                                    {labelsState && labelsState.length > 0 && (
                                        <span className={styles.value}>
                                            {labelsState.map((label, index) =>
                                                index <
                                                labelsState.length - 1 ? (
                                                    <span>
                                                        <span
                                                            className={
                                                                styles.white
                                                            }
                                                        >
                                                            "
                                                        </span>
                                                        {label}
                                                        <span
                                                            className={
                                                                styles.white
                                                            }
                                                        >
                                                            "
                                                        </span>
                                                        <span
                                                            className={
                                                                styles.white
                                                            }
                                                        >
                                                            ,{" "}
                                                        </span>
                                                    </span>
                                                ) : (
                                                    <span>
                                                        <span
                                                            className={
                                                                styles.white
                                                            }
                                                        >
                                                            "
                                                        </span>
                                                        {label}
                                                        <span
                                                            className={
                                                                styles.white
                                                            }
                                                        >
                                                            "
                                                        </span>
                                                    </span>
                                                )
                                            )}
                                        </span>
                                    )}
                                    ],
                                </span>
                                <br />
                                <span className={styles.indentation}>
                                    {" "}
                                    <span className={styles.attribute}>
                                        percentExplicit
                                    </span>
                                    :{" "}
                                    <span className={styles.value}>
                                        {percentState ? percentState : null}
                                    </span>
                                </span>
                            </p>
                            {"}"}
                        </>
                    ) : (
                        <LoadingSpinner backgroundColor={"#3c3e44"} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContentScanner;
