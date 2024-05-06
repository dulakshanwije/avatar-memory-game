import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        🎲 Crafted by <a href="https://github.com/dulakshanwije">Dulakshan</a>
      </p>
      <p className={styles.disclaimer}>
        <b>DISCLAIMER:</b> The copyright of all images on this site belongs to
        the original owners. All character and name references are the property
        of their respective owners.
      </p>
    </div>
  );
}
