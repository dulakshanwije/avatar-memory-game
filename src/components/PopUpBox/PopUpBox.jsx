import styles from "./popUpBox.module.css";
import { Link, useNavigate } from "react-router-dom";
export default function PopUpBox({
  title,
  subtitle,
  time,
  flipCount,
  score,
  episode,
}) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{`" ${subtitle} "`}</p>
        <div className={styles.info_box}>
          <p>Time: {time} secs</p>
          <p>Flips: {flipCount}</p>
          <p>
            Score: {score} {episode}
          </p>
        </div>
        <div className={styles.button_holder}>
          <button
            className={styles.button}
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
          <Link to="/">
            <button className={styles.button}>Main Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
}