import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div>
      {/* <EpisodeCard /> */}
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
