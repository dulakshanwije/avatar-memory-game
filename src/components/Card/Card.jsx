import styles from "./card.module.css";
export default function Card({ image }) {
  return (
    <div className={styles.card_container}>
      <img src={image} />
    </div>
  );
}
