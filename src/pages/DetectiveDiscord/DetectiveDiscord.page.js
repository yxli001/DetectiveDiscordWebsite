import React from "react";

import styles from "./DetectiveDiscord.module.css";
import { BoxComponent } from "../../components/BoxComponent/BoxComponent.component";
const DetectiveDiscord = () => {
    return (
        <div className={styles.discordContainer} id="detective">
            <div className={styles.imagesContainer}>
                <BoxComponent text="Stop explicit content" image="thumbUp" />
                <BoxComponent
                    text="Moderate effectively"
                    extra
                    image="hammer"
                />
                <BoxComponent text="Share bans across servers" image="swap" />
                <BoxComponent text="Get notified" extra image="notify" />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>Detective Discord</div>
                <div className={styles.description}>
                    Detective Discord is a discord bot that will keep your
                    discord servers hate-free. It will delete any messages that
                    contain hate speech or other explicit content, and server
                    owners can choose to automatically ban members over a
                    certain number of strikes. It will also directly warn server
                    owners when someone who has a bad record joins their server.
                </div>
                <a
                    className={styles.addButton}
                    href="https://discord.com/oauth2/authorize?client_id=1028384869404913676&scope=bot&permissions=207878"
                    target="_blank"
                >
                    Add our bot
                </a>
            </div>
        </div>
    );
};

export default DetectiveDiscord;
