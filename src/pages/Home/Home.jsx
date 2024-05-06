import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import names from "../../assets/data/names";
import Footer from "../../components/Footer/Footer";
export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <p className={styles.title1}>Avatar: The Last Airbender</p>
        <p className={styles.title2}>Flip Card: Memory Game</p>
      </div>
      <div className={styles.episode_holder}>
        {names.map((name, index) => (
          <EpisodeCard
            title={name.title}
            desc={name.desc}
            link={name.link}
            key={index}
            index={index + 1}
            image={name.image}
            isLeft={index === 3 || index === 4}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
