import card_cover from "../assets/images/card.png";
import ReactCardFlip from "react-card-flip";
import Card from "./Card";
export default function FlipCard({ image, value, index, flip, handleFlip }) {
  return (
    <div onClick={() => handleFlip(index, value)}>
      <ReactCardFlip isFlipped={flip[index]} flipDirection="vertical">
        <div>
          <Card image={card_cover} />
        </div>
        <div>
          <Card image={image} />
        </div>
      </ReactCardFlip>
    </div>
  );
}
