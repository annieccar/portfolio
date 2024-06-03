import { useState, useEffect } from "react";

import styles from "../styles/SkillsCaroussel.module.scss";

function SkillsCaroussel() {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  window.addEventListener("resize", handleResize);

  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "SQL",
    "Figma",
    "Sass",
  ];

  return (
    <div className={styles.caroussel}>
      <div className={styles.scroller_inner}>
        {skills.map((skill) => (
          <div className={styles.skillBox} key={skill}>
            <div className={styles.skill}>{skill}</div>
          </div>
        ))}
        {!isMobile
          ? skills.map((skill) => (
              <div className={styles.skillBox}>
                <div className={styles.skill}>{skill}</div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default SkillsCaroussel;
