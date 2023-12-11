import styles from "../styles/Presentation.module.scss";

function Presentation() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Hello, I'm Annie</h1>
      <p className={styles.paragraph}>
        A year ago, I embarked on a transitional journey from being an
        experienced project engineer to an aspiring web developper, fueled by a
        passion and commitment to turn every challenge into an opportunity for
        growth.
      </p>
    </section>
  );
}

export default Presentation;
