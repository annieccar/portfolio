import styles from "../styles/AboutMe.module.scss";
import photo from "../assets/Images/annie.jpg";
import SkillsCaroussel from "./SkillsCaroussel";

import { useLanguageContext } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

function AboutMe() {
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  return (
    <section className={styles.section} id="aboutMe">
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === "english" ? "About Me" : "A propos de moi"}
        </h1>
        <div className={styles.presentation}>
          <div className={styles.presentationText}>
            <p className={styles.paragraph}>
              {language === "english"
                ? "My name is Annie Croteau-Carignan. I'm from Québec city, Canada. I lived in Australia for 7 years before moving to the southwest of France."
                : "Je m'appelle Annie Croteau-Carignan. Je suis originaire de Québec au Canada. J'ai vécu en Australie pendant 7 ans avant de déménager dans le sud-ouest de la France."}
            </p>
            <p className={styles.paragraph}>
              {language === "english"
                ? "About a year ago, I was still working as a civil Engineer, a career that I pursued for a decade. My growing interest for the digital universe, combined with my problem-solving skills, encouraged me to make a career change to Web Development. I have since completed a course to learn the foundation of both front-end and back-end development and earned my Web Development certification."
                : "Il y a environ un an, je travaillais encore comme ingénieure civil, un métier que j'ai exercé pendant dix ans. Mon intérêt croissant pour l'univers du numérique, combiné à mes compétences en résolution de problèmes, m'ont encouragé à entreprendre une reconversion en développement Web. J'ai depuis suivi une formation pour apprendre les bases du développement front-end et back-end et obtenu mon titre professionnel développeur web et web mobile."}
            </p>
            <p className={styles.paragraph}>
              {language === "english"
                ? "I love to write concise and clean code to bring both the technical and visual aspects of digital products to life, always with a strong attention to details!"
                : "J'aime écrire du code concis et propre pour donner vie aux aspects techniques et visuels des produits numériques, toujours avec une grande attention aux détails!"}
            </p>
            <p className={styles.paragraph}>
              {language === "english"
                ? "When I’m not in front of the computer learning new development skills, I am either cooking delicious food, surfing, or enjoying time with friends and family."
                : "Lorsque je ne suis pas devant l'ordinateur à apprendre de nouvelles connaissances en développement, j'aime cuisiner de délicieux plats, faire du surf ou passer mon temps avec mes amis et ma famille."}
            </p>
            <p className={styles.paragraph}>
              {language === "english"
                ? "Below, you'll find the technologies I've been using in my projects, along with my complete resume "
                : "Ci-dessous, vous trouverez les technologies que j'ai utilisées dans mes projets, ainsi que mon CV complet "}
              <a
                className={styles.link}
                onClick={() => {
                  navigate("/resume");
                }}
              >
                {language === "english" ? "here" : "ici"}
              </a>
              .
            </p>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src={photo}
                className={styles.photo}
                alt="Photo of Annie showing face and shoulders"
              />
            </div>
          </div>
        </div>
        <SkillsCaroussel />
      </div>
    </section>
  );
}

export default AboutMe;
