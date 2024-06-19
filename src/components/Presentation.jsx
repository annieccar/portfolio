import { useLanguageContext } from "../contexts/LanguageContext";
import styles from "../styles/Presentation.module.scss";

function Presentation() {
  const { language } = useLanguageContext();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        {language === "english"
          ? "Hey there! I'm Annie"
          : "Bonjour, je m'appelle Annie"}
      </h1>
      <p className={styles.paragraph}>
        {language === "english"
          ? "I was an engineer, I became a web developer and I implement innovative and functional digital solutions, one line of code at a time."
          : "Ingénieure reconvertie en développeuse web, je réalise des solutions numériques innovantes et fonctionnelles, une ligne de code à la fois."}
      </p>
    </section>
  );
}

export default Presentation;
