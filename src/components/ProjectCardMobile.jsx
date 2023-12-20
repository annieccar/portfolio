import React from "react";

import styles from "../styles/ProjectCardMobile.module.scss";
import { FiGithub } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

function ProjectCardMobile({ project, setProjectOpened }) {
  return (
    <div className={styles.fixedContainer}>
      <div className={styles.projectCardLeft}>
        <div className={styles.closeButton}>
          <IoCloseCircleOutline
            size={35}
            onClick={() => {
              setProjectOpened(false);
            }}
          />
        </div>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src={project.photo}
              className={styles.photo}
              alt={`Homepage of ${project.title} website`}
            />
          </div>
        </div>
        <div className={styles.description}>{project.description}</div>
        <div className={styles.technoContainer}>
          {project.technologies.map((techno) => (
            <div className={styles.technoBox}>
              <p className={styles.techno} key={techno}>
                {techno}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.icons}>
          <a className={styles.link} href={project.githubLink}>
            <FiGithub size={25} />
          </a>
          <a className={styles.link} href={project.siteLink}>
            <FiExternalLink size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardMobile;
