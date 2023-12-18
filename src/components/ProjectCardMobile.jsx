import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "../styles/ProjectCardMobile.module.scss";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

function ProjectCardMobile({
  photo,
  title,
  description,
  technologies,
  githubLink,
  siteLink,
}) {
  const { ref: projectRef, inView: projectIsVisible } = useInView();

  return (
    <section ref={projectRef} className={styles.projectCardLeft}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={photo}
            className={styles.photo}
            alt={`Homepage of ${title} website`}
          />
        </div>
      </div>
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
    </section>
  );
}

export default ProjectCardMobile;
