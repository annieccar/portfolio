import { useState, useEffect } from "react";

import styles from "../styles/SkillsCaroussel.module.scss";

function SkillsCaroussel() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

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
          <div className={styles.skillBox}>
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
