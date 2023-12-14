import { useLanguageContext } from "../contexts/LanguageContext";
import styles from "../styles/Presentation.module.scss";

function Presentation() {
  const { language } = useLanguageContext();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        {language === "english"
          ? "Hello, I'm Annie"
          : "Bonjour, je m'appel Annie"}
      </h1>
      <p className={styles.paragraph}>
        {language === "english"
          ? "A year ago, I embarked on a journey to transition from being an experienced project engineer for 9 years to an aspiring web developper. This project has been fueled by my growing passion for the digital universe and I have thoroughly enjoyed every step of the process thus far!"
          : "Il y a de cela un an, j'ai décidée de m'investir dans une démarche de reconversion professionnelle. Partant de l'univers du génie civil dans lequel j'exerçais depuis 9 ans, j'ai décidé de poursuivre ma passion pour l'univers du numérique et d'entamer une formation afin de devenir développeuse web."}
      </p>
    </section>
  );
}

export default Presentation;
