import styles from "./cardgrid.module.css";
import image0 from "../../assets/images/characters/1-min.png";
import image1 from "../../assets/images/characters/2-min.png";
import image2 from "../../assets/images/characters/3-min.png";
import image3 from "../../assets/images/characters/4-min.png";
import image4 from "../../assets/images/characters/5-min.png";
import image5 from "../../assets/images/characters/8-min.png";
import { useEffect, useState } from "react";
import FlipCard from "../FlipCard/FlipCard";

const data = [
  { index: "0", image: image0, value: "A", matched: false },
  { index: "1", image: image1, value: "B", matched: false },
  { index: "2", image: image2, value: "C", matched: false },
  { index: "3", image: image3, value: "D", matched: false },
  { index: "4", image: image4, value: "E", matched: false },
  { index: "5", image: image5, value: "F", matched: false },
];

export default function CardGrid({ setFlipCount, setScore, score }) {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...data, ...data] // 2 lots of card images
      .sort(() => Math.random() - 0.5) // shuffled array
      .map((card) => ({ ...card, id: Math.random() })); // add on random ID number to each card

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    setFlipCount(turns);
  }, [turns]);

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // reset game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.value === choiceTwo.value) {
        setScore((score) => score + 10);
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.value === choiceOne.value) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
        setScore(score > 0 ? (score) => score - 5 : score);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className={styles.container}>
      {cards.map((ele, id) => (
        <FlipCard
          image={ele.image}
          flip={ele === choiceOne || ele === choiceTwo || ele.matched}
          handleChoice={handleChoice}
          card={ele}
          key={ele.id}
          disabled={disabled}
        />
      ))}
    </div>
  );
}
