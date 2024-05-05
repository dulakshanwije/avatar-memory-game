import card_cover from "../../assets/images/card.png";
import ReactCardFlip from "react-card-flip";
import Card from "../Card/Card";
export default function FlipCard({
  image,
  flip,
  handleChoice,
  disabled,
  card,
}) {
  const handleClick = () => {
    console.log(disabled);
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <div onClick={handleClick}>
          <Card image={card_cover} />
        </div>
        <div>
          <Card image={image} />
        </div>
      </ReactCardFlip>
    </div>
  );
}
