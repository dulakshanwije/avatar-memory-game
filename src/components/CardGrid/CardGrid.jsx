import styles from "./cardgrid.module.css";
import episodes from "../../assets/data/episodes.js";
import { useEffect, useState } from "react";
import FlipCard from "../FlipCard/FlipCard";
// import PopUpBox from "../PopUpBox/PopUpBox";

export default function CardGrid({
  setFlipCount,
  setScore,
  score,
  setIsWon,
  episode,
}) {
  const episode_no = parseInt(episode);
  const data = episodes[episode_no];
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [winCount, setWinCount] = useState(0);

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
    if (winCount === 6) {
      console.log(winCount);
      setIsWon(true);
      setWinCount(0);
    }
  }, [winCount]);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.value === choiceTwo.value) {
        setScore((score) => score + 10);
        setWinCount((winCount) => winCount + 1);
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
    <>
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
    </>
  );
}
