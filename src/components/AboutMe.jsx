import styles from "../styles/AboutMe.module.scss";
import photo from "../assets/Images/annie.jpg";
import SkillsCaroussel from "./SkillsCaroussel";

function AboutMe() {
  return (
    <section className={styles.section} id="aboutMe">
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.presentation}>
          <p className={styles.paragraph}>
            Hi there! My name is Annie Croteau-Carignan and..... Contrary to
            popular belief, Lorem Ipsum is not simply random text. It has roots
            in a piece of classical Latin literature from 45 BC, making it over
            2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. Here are the
            technologies I’ve been working with so far:
          </p>
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
