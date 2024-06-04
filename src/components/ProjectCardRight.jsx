import React from "react";
import { useInView } from "react-intersection-observer";

import { useLanguageContext } from "../contexts/LanguageContext";
import styles from "../styles/ProjectCardRight.module.scss";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

function ProjectCardRight({
  photo,
  type,
  image,
  imageMobile,
  title,
  descriptionEnglish,
  descriptionFrench,
  technologies,
  githubLink,
  siteLink,
}) {
  const { ref: projectRef, inView: projectIsVisible } = useInView();
  const { language } = useLanguageContext();
  return (
    <section ref={projectRef} className={styles.projectCardRight}>
      <div
        className={`${styles.imageContainer} ${
          projectIsVisible ? styles.animatePhoto : ""
        }`}
      >
        <div className={styles.imageWrapper}>
          {type === "photo" ? (
            <a href={siteLink}>
              <img src={photo} className={styles.photo} />
            </a>
          ) : (
            <video controls poster={image} className={styles.photo}>
              <source src={photo} type="video/mp4" />
              Your browser does not support the video tag
            </video>
          )}
        </div>
      </div>

      <div
        className={`${styles.infos} ${
          projectIsVisible ? styles.animateInfo : ""
        }`}
      >
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.description}>
          {language === "english" ? descriptionEnglish : descriptionFrench}
        </div>
        <div className={styles.technoBox}>
          {technologies.map((techno) => (
            <p className={styles.techno}>{techno}</p>
          ))}
        </div>
        <div className={styles.icons}>
          <a className={styles.link} href={githubLink}>
            <FiGithub size={25} />
          </a>
          {siteLink ? (
            <a className={styles.link} href={siteLink}>
              <FiExternalLink size={28} />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectCardRight;
