import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import names from "../../assets/data/names";
export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <p className={styles.title1}>Avatar: The Last Airbender</p>
        <p className={styles.title2}>Memory Game</p>
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
          />
        ))}
      </div>
      {/* <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard /> */}
      <Link to="/game/0">Characters</Link>
      <Link to="/game/1">Episode 1</Link>
      <Link to="/game/2">Episode 2</Link>
      <Link to="/game/3">Episode 3</Link>
      <Link to="/game/4">Episode 4</Link>
      <Link to="/game/5">Episode 5</Link>
      <Link to="/game/6">Episode 6</Link>
      <Link to="/game/7">Episode 7</Link>
      <Link to="/game/8">Episode 8</Link>
    </div>
  );
}
