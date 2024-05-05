import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import CardGrid from "./components/CardGrid/CardGrid";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

export default function App() {
  // Number of Flips
  const [flipCount, setFlipCount] = useState(0);
  const [time, setTime] = useState(30);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (flipCount >= 1) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [flipCount]);

  useEffect(() => {
    if (time == 0) {
      setFlipCount(0);
      setTime(30);
    }
  }, [time]);

  return (
    <>
      {/* <Home /> */}
      <Header flips={flipCount} time={time} score={score} />
      <CardGrid
        setFlipCount={setFlipCount}
        flipCount={flipCount}
        score={score}
        setScore={setScore}
      />
      <Footer />
    </>
  );
}
