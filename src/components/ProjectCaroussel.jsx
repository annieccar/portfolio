import { useState } from "react";
import styles from "../styles/ProjectCaroussel.module.scss";
import ProjectCardMobile from "./ProjectCardMobile";

function ProjectCaroussel({ projects }) {
  const [projectOpened, setProjectOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  const openProject = (project) => {
    setSelectedProject(project);
    setProjectOpened(true);
  };

  return (
    <div>
      {projects.map((project) => (
        <div
          className={styles.imageContainer}
          key={project.title}
          onClick={() => openProject(project)}
        >
          <div className={styles.imageWrapper}>
            {project.type === "photo" ? (
              <img src={project.photo} className={styles.photo} />
            ) : (
              <video controls className={styles.photo}>
                <source src={project.photo} type="video/mp4" />
                Your browser does not support the video tag
              </video>
            )}
          </div>
          <div className={styles.info}>
            <p className={styles.title}>{project.title}</p>
            <div className={styles.techContainer}>
              {project.technologies.map((techno) => (
                <p className={styles.techno} key={techno}>
                  {techno}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
      {projectOpened ? (
        <ProjectCardMobile
          project={selectedProject}
          setProjectOpened={setProjectOpened}
        />
      ) : (
        ""
      )}
      ;
    </div>
  );
}

export default ProjectCaroussel;
