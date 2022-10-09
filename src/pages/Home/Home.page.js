import React, { useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ContentScanner from "../ContentScanner/ContentScanner.page";
import Navbar from "../../components/Navbar/Navbar";
import DetectiveDiscord from "../DetectiveDiscord/DetectiveDiscord.page";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [hateSpeechState, setHateSpeechState] = useState("false");
    const [labelsState, setLabelsState] = useState([]);
    const [textInput, setTextInput] = useState("");

    const sendNetworkRequest = async () => {
        try {
            setLoading(true);
            const res = await axios.post(
                `https://detective-discord-1.herokuapp.com/api/detector`,
                { text: textInput }
            );
            setLabelsState(res.data.labels);
            setHateSpeechState(res.data.hateSpeech);

            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.mainContainer}>
                <Navbar />
                <h1
                    className={`${styles.catchPhrase} animate__animated animate__flipInX`}
                >
                    Detect Hate Speech in Seconds
                </h1>
                <div className={styles.demo}>
                    <div
                        className={`${styles.demoLeft} animate__animated animate__fadeInLeft`}
                    >
                        <h1 className={styles.tryOut}>Try it out!</h1>
                        <textarea
                            type="text"
                            className={styles.input}
                            onChange={(e) => setTextInput(e.target.value)}
                            rows={3}
                            placeholder="Enter some hate speech (or not)"
                        ></textarea>
                        <button
                            className={styles.button}
                            onClick={() => sendNetworkRequest()}
                        >
                            Test
                        </button>
                    </div>
                    <div
                        className={`${styles.demoRight} animate__animated animate__fadeInRight`}
                    >
                        <h1 className={styles.resultTitle}>Output:</h1>
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
                                            {labelsState &&
                                                labelsState.length > 0 && (
                                                    <span
                                                        className={styles.value}
                                                    >
                                                        {labelsState.map(
                                                            (label, index) =>
                                                                index <
                                                                labelsState.length -
                                                                    1 ? (
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
                                </>
                            ) : (
                                <LoadingSpinner backgroundColor={"#3c3e44"} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ContentScanner />
            <DetectiveDiscord />
        </div>
    );
};

export default Home;
