import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.container}>
      <p>
        Developed by{" "}
        <a href="https://github.com/dulakshanwije">Dulakshan Wije.</a>
      </p>
      <p className={styles.disclaimer}>
        Disclaimer : The copyright of all images on this site belongs to the
        original owners.
      </p>
    </div>
  );
}
