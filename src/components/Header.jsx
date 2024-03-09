import styles from "./header.module.css";
export default function Header({ time = 0, flips = 0, score = 0 }) {
  return (
    <div className={styles.container}>
      <p className={styles.title1}>Avatar: The Last Airbender</p>
      <p className={styles.title2}>Memory Game</p>
      <div className={styles.icon_holder}>
        <div className={styles.icon}>Time: {time}</div>
        <div className={styles.icon}>Flips: {flips}</div>
        <div className={styles.icon}>Score: {score}</div>
      </div>
    </div>
  );
}
