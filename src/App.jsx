import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

export default function App() {
  // Number of Flips
  const [flipCount, setFlipCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (flipCount >= 1) {
      const interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [flipCount]);
  return (
    <>
      <Header flips={flipCount} time={time} />
      <CardGrid setFlipCount={setFlipCount} flipCount={flipCount} />
      <Footer />
    </>
  );
}
