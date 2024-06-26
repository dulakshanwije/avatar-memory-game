import { useEffect, useState } from "react";
// import Header from "./../components/Header/Header";
import Header from "../../components/Header/Header";
// import Card from "../../components/Card/Card";
import CardGrid from "../../components/CardGrid/CardGrid";
import Footer from "../../components/Footer/Footer";
// import Home from "./pages/Home/Home";
import PopUpBox from "../../components/PopUpBox/PopUpBox";
import { useNavigate, useParams } from "react-router-dom";
export default function Game() {
  // Number of Flips
  const { episode } = useParams();
  const navigate = useNavigate();
  const [flipCount, setFlipCount] = useState(0);
  const [time, setTime] = useState(30);
  const [score, setScore] = useState(0);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [showWon, setShowWon] = useState(false);

  const max_time = 30;

  useEffect(() => {
    if (!episode || !(0 <= episode && episode <= 8)) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (flipCount >= 1 && !isWon) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [flipCount]);

  useEffect(() => {
    if (time == 0) {
      setFlipCount(0);
      setTime(max_time);
      setIsTimeOut(true);
    }
  }, [time]);

  useEffect(() => {
    if (isWon) {
      const timer = setTimeout(() => setShowWon(true), 1500);
    }
  }, [isWon]);

  return (
    <>
      {/* <Home /> */}
      <Header flips={flipCount} time={time} score={score} episode={episode} />
      <CardGrid
        setFlipCount={setFlipCount}
        flipCount={flipCount}
        score={score}
        setScore={setScore}
        setIsWon={setIsWon}
        episode={episode - 1}
      />
      {isTimeOut ? (
        <PopUpBox
          title={"Out of time !"}
          subtitle={"Perhaps a Quicker Approach is Needed"}
          score={score}
          flipCount={flipCount}
          time={time}
        />
      ) : (
        ""
      )}
      {showWon ? (
        <PopUpBox
          title={"Victory is yours!"}
          subtitle={"Excellent Work! Keep Up the Good Fight"}
          score={score}
          flipCount={flipCount}
          time={max_time - time}
          episode={episode}
        />
      ) : (
        ""
      )}

      <Footer />
    </>
  );
}
