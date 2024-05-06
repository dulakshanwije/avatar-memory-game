import styles from "./episodecard.module.css";
import { useNavigate } from "react-router-dom";
export default function EpisodeCard({ title, desc, link, index, image }) {
  const navigate = useNavigate();
  return (
    <div className={styles.episode_card}>
      <div className={styles.episode_image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.episode_desc}>
        <div>
          <div className={styles.title}>{`Episode ${index}: ${title}`}</div>
          <div className={styles.desc}>{desc}</div>
        </div>
        <div className={styles.button_holder}>
          <button onClick={() => navigate(link)}>Play</button>
        </div>
      </div>
    </div>
  );
}
