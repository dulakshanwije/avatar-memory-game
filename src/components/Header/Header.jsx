import styles from "./header.module.css";
import names from "../../assets/data/names";
export default function Header({
  time = 0,
  flips = 0,
  score = 0,
  episode = 0,
}) {
  const episode_no = parseInt(episode) - 1;
  return (
    <div className={styles.container}>
      <p className={styles.title1}>Avatar: The Last Airbender</p>
      <p className={styles.title2}>
        Episode {episode_no + 1} : {names[episode_no].title}
      </p>
      <div className={styles.icon_holder}>
        <div className={time > 10 ? styles.icon : styles.icon_red}>
          Time: {time} secs
        </div>
        <div className={styles.icon}>Flips: {flips}</div>
        <div className={styles.icon}>Score: {score}</div>
      </div>
    </div>
  );
}
