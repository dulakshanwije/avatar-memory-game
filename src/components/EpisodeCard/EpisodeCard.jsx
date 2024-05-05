import styles from "./episodecard.module.css";
export default function EpisodeCard() {
  return (
    <div className={styles.episode_card}>
      <div className={styles.episode_image}>
        <img src="src\assets\images\episodes\e2.jpeg" alt="" />
      </div>
      <div className={styles.episode_desc}> </div>
    </div>
  );
}
