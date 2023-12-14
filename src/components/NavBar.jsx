import React, { useState } from "react";

import logo from "../assets/Images/logo.png";
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

  return (
    <div className={styles.window}>
      <nav className={styles.navBar}>
        <img
          className={styles.image}
          src={logo}
          alt="The letter A surrounded by the letter C in a peach gradient color, the logo of the website"
        />
        <div className={styles.icons}>
          <a
            href="https://github.com/annieccar?tab=repositories"
            className={styles.icon}
          >
            <VscGithubAlt size={30} />
          </a>
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            className={styles.icon}
          >
            <SlSocialLinkedin size={30} />
          </a>
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
      {menuOpen && (
        <>
          <div className={styles.menu}>
            <a
              href="#aboutMe"
              className={styles.item}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              About me
            </a>
            <a
              href="#projects"
              className={styles.item}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              My projects
            </a>
            <a
              className={styles.item}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Resume
            </a>
            <a
              href="#contact"
              className={styles.item}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Contact me
            </a>
          </div>
          <div className={styles.closeButton}>
            <IoCloseCircleOutline
              size={40}
              onClick={() => {
                setMenuOpen(false);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
