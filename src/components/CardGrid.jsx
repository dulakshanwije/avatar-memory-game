import styles from "./cardgrid.module.css";
import image0 from "../assets/images/characters/1-min.png";
import image1 from "../assets/images/characters/2-min.png";
import image2 from "../assets/images/characters/3-min.png";
import image3 from "../assets/images/characters/4-min.png";
import image4 from "../assets/images/characters/5-min.png";
import { useEffect, useState } from "react";
import FlipCard from "./FlipCard";
export default function CardGrid({ setFlipCount, flipCount }) {
  const [flip, setFlip] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const data = [
    { index: "0", image: image0, value: "0" },
    { index: "1", image: image1, value: "1" },
    { index: "2", image: image2, value: "2" },
    { index: "3", image: image3, value: "3" },
    { index: "4", image: image4, value: "4" },
    { index: "5", image: image0, value: "0" },
    { index: "6", image: image1, value: "1" },
    { index: "7", image: image2, value: "2" },
    { index: "8", image: image3, value: "3" },
    { index: "9", image: image4, value: "4" },
  ];
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [clickCount, setClickCount] = useState(0);

  function handleFlip(id) {
    const arr_flip = flip.map((ele, index) => {
      if (index == id) {
        ele = !ele;
      }
      return ele;
    });
    setClickCount((clickCount) => clickCount + 1);
    setFlipCount((flipCount) => flipCount + 1);
    if (clickCount == 1) {
      setFirstCard(data[id]);
      console.log("firstCard " + firstCard.value);
    } else if (clickCount == 2) {
      setSecondCard(data[id]);
      console.log("secondCard " + secondCard.value);
    } else if (clickCount > 2) {
      setClickCount(0);
    }

    setFlip(arr_flip);
  }

  return (
    <div className={styles.container}>
      {/* <p>{clickCount}</p> */}
      {data.map((ele, id) => (
        <FlipCard
          image={ele.image}
          value={ele.value}
          index={ele.index}
          flip={flip}
          handleFlip={handleFlip}
          key={id}
        />
      ))}
    </div>
  );
}
