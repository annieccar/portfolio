import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";

import styles from "../styles/NavBar.module.scss";
import { useLanguageContext } from "../contexts/LanguageContext";

function NavBar() {
  const [languageSelected, setLanguageSelected] = useState(false);
  const { language, setLanguage } = useLanguageContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = () => {
    if (language === "english") {
      setLanguage("french");
    } else setLanguage("english");
  };

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  window.addEventListener("resize", handleResize);

  return (
    <div className={styles.window}>
      <nav className={styles.navBar}>
        <div className={styles.info}>
          <div className={styles.logo}>AC</div>
          {!isMobile ? (
            <div className={styles.contact}>anniecroteauc@gmail.com</div>
          ) : (
            ""
          )}
          {!isMobile ? (
            <div className={styles.contact}>+33 6 23 67 15 29</div>
          ) : (
            ""
          )}
        </div>

        <div className={styles.icons}>
          {!isMobile ? (
            <a
              href="https://github.com/annieccar?tab=repositories"
              className={styles.icon}
            >
              <VscGithubAlt size={30} />
            </a>
          ) : null}
          {!isMobile ? (
            <a
              href="https://www.linkedin.com/in/annie-croteau-83725860/"
              className={styles.icon}
            >
              <SlSocialLinkedin size={30} />
            </a>
          ) : (
            ""
          )}
          {!isMobile ? (
            <div
              className={styles.languageBox}
              onClick={() => setLanguageSelected(!languageSelected)}
            >
              <div className={styles.language}>
                <p>{language === "english" ? "EN" : "FR"}</p>
                <IoIosArrowDown size={20} />
              </div>
              {languageSelected && (
                <p
                  className={styles.otherLanguage}
                  onClick={() => changeLanguage()}
                >
                  {language === "english" ? "FR" : "EN"}
                </p>
              )}
            </div>
          ) : (
            ""
          )}

          <div className={styles.icon}>
            <CgMenuRight
              size={35}
              onClick={() => {
                setMenuOpen(true);
              }}
            />
          </div>
        </div>
      </nav>
      {menuOpen ? (
        <div className={styles.menu}>
          <div className={styles.icons}>
            {isMobile ? (
              <a
                href="https://github.com/annieccar?tab=repositories"
                className={styles.icon}
              >
                <VscGithubAlt size={30} />
              </a>
            ) : (
              ""
            )}
            {isMobile ? (
              <a
                href="https://www.linkedin.com/in/annie-croteau-83725860/"
                className={styles.icon}
              >
                <SlSocialLinkedin size={30} />
              </a>
            ) : (
              ""
            )}
          </div>
          <a
            href="#aboutMe"
            className={styles.item}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            {language == "english" ? "About me" : "A propos de moi"}
          </a>
          <a
            href="#projects"
            className={styles.item}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            {language == "english" ? "My projects" : "Mes projets"}
          </a>
          <a
            className={styles.item}
            onClick={() => {
              navigate("/resume");
            }}
          >
            {language == "english" ? "Resume" : "CV"}
          </a>
          <a
            href="#contact"
            className={styles.item}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            {language == "english" ? "Contact me" : "Me contacter"}
          </a>
          {isMobile ? (
            <div
              className={styles.languageBox}
              onClick={() => setLanguageSelected(!languageSelected)}
            >
              <p className={styles.language}>
                {language === "english" ? "EN" : "FR"}
              </p>

              <p
                className={styles.otherLanguage}
                onClick={() => changeLanguage()}
              >
                {language === "english" ? "FR" : "EN"}
              </p>
            </div>
          ) : (
            ""
          )}
          <div className={styles.closeButton}>
            <IoCloseCircleOutline
              size={40}
              onClick={() => {
                setMenuOpen(false);
              }}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
