import styles from "./cardgrid.module.css";
import image0 from "../assets/images/characters/1-min.png";
import image1 from "../assets/images/characters/2-min.png";
import image2 from "../assets/images/characters/3-min.png";
import image3 from "../assets/images/characters/4-min.png";
import image4 from "../assets/images/characters/5-min.png";
import { useEffect, useState } from "react";
import FlipCard from "./FlipCard";

const data = [
  { index: "0", image: image0, value: "A" },
  { index: "1", image: image1, value: "B" },
  { index: "2", image: image2, value: "C" },
  { index: "3", image: image3, value: "D" },
  { index: "4", image: image4, value: "E" },
  { index: "5", image: image0, value: "A" },
  { index: "6", image: image1, value: "B" },
  { index: "7", image: image2, value: "C" },
  { index: "8", image: image3, value: "D" },
  { index: "9", image: image4, value: "E" },
];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffle_data = shuffle(data);

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

  // let clickCount1 = 0;
  const [clickCount, setClickCount] = useState(1);
  // let firstCard = "";
  const [firstCard, setFirstCard] = useState("");
  // let secondCard = "";
  const [secondCard, setSecondCard] = useState("");
  // let currentIndex;
  const [currentIndex, setCurrentIndex] = useState(0);
  // let completedValues = [""];
  const [completedValues, setCompletedValues] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);

  function turnCard(index) {
    // Implementing flip functionality
    const arr = flip.map((ele, id) => {
      if (index == id) {
        return true;
      }
      return ele;
    });
    setFlip(arr);
  }

  function handleFlip(index, value) {
    // Checking whether the click is on a already opened card
    if (!completedValues.includes(value)) {
      // clickCount++;
      setClickCount(clickCount + 1);
      console.log(clickCount);
      if (clickCount == 1) {
        // First click, value and index recorded.
        // firstCard = value;
        setFirstCard(value);
        setFirstIndex(index);
        // currentIndex = index;
        setCurrentIndex(index);
        turnCard(index);
      } else if (clickCount == 2) {
        //Second Click
        if (currentIndex == index) {
          // Check for the same card
          console.log("Same Card!!!");
          // firstCard = "";
          setFirstCard("");
          // secondCard = "";
          setSecondCard("");
        } else {
          // If it is not the same card then recording the value of second click
          // secondCard = value;
          setSecondCard(value);
          setSecondIndex(index);
          turnCard(index);
          if (secondCard == firstCard) {
            // Checking if both cards are same
            // If same maatched part running
            console.log("matched");
            // completedValues.push(firstCard);
            setCompletedValues(() => completedValues.push(firstCard));
            // firstCard = "";
            setFirstCard("");
            // secondCard = "";
            setSecondCard("");
          } else {
            // If it is not matching, resetting the cards to empty after 500ms delay
            setTimeout(() => {
              // firstCard = "";
              setFirstCard("");
              // secondCard = "";
              setSecondCard("");
              const arr = flip.map((ele, id) => {
                if (id == firstIndex) {
                  return false;
                }
                if (id == secondIndex) {
                  return false;
                }
                return ele;
              });
              setFlip(arr);
              console.log("thisCleared");
            }, 1000);
          }
        }
        // clickCount = 0;
        setClickCount(1);
      }
      console.log("firstCard" + firstCard);
      console.log("secondCard" + secondCard);
      console.log(completedValues);
    }
  }
  return (
    <div className={styles.container}>
      {/* <div>
        <p>First{firstCard}</p>
        <p>Second{secondCard}</p>
      </div> */}
      {shuffle_data.map((ele, id) => (
        // {data.map((ele, id) => (
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
