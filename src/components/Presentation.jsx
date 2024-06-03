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
          ? "I was an engineer, I became a web developer and I love turning ideas to reality through coding.  "
          : "Ingénieure reconvertie en développeuse web, j'utilise le code pour transformer les idées en réalité."}
      </p>
    </section>
  );
}

export default Presentation;
