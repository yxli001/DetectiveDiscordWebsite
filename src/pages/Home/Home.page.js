import React, { useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";

const Home = () => {
    const [hateSpeechState, setHateSpeechState] = useState("false");
    const [labelsState, setLabelsState] = useState([]);
    const [textInput, setTextInput] = useState("");

    const sendNetworkRequest = async () => {
        try {
            const res = await axios.post(
                `http://localhost:8000/api/detector/`,
                { text: textInput }
            );
            setLabelsState(res.data.labels);
            setHateSpeechState(res.data.hateSpeech);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.mainContainer}>
                <h1 className={styles.catchPhrase}>
                    Detect Hate Speech in Seconds
                </h1>
                <div className={styles.demo}>
                    <div className={styles.demoLeft}>
                        <h1 className={styles.tryOut}>Try it out!</h1>
                        <textarea
                            type="text"
                            className={styles.input}
                            onChange={(e) => setTextInput(e.target.value)}
                            rows={3}
                        ></textarea>
                        <button
                            className={styles.button}
                            onClick={() => sendNetworkRequest()}
                        >
                            Test
                        </button>
                    </div>
                    <div className={styles.demoRight}>
                        <h1 className={styles.resultTitle}>Output:</h1>
                        <div className={styles.codeBackground}>
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
                                    ]
                                </span>
                            </p>
                            {"}"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
