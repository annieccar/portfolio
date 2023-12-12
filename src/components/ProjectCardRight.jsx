import styles from "../styles/ProjectCardRight.module.scss";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

function ProjectCardRight({
  photo,
  title,
  description,
  technologies,
  githubLink,
  siteLink,
}) {
  return (
    <section className={styles.projectCardRight}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img src={photo} className={styles.photo} />
        </div>
      </div>

      <div className={styles.infos}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.description}>{description}</div>
        <div className={styles.technoBox}>
          {technologies.map((techno) => (
            <p className={styles.techno}>{techno}</p>
          ))}
        </div>
        <div className={styles.icons}>
          <a className={styles.link} href={githubLink}>
            <FiGithub size={25} />
          </a>
          <a className={styles.link} href={siteLink}>
            <FiExternalLink size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCardRight;
