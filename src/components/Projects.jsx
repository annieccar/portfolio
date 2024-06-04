import { useState, useEffect } from "react";

import { useLanguageContext } from "../contexts/LanguageContext";

import styles from "../styles/Projects.module.scss";
import OD from "../assets/Images/originsDigital.png";
import BTB from "../assets/Images/bumpToBundle.png";
import RF from "../assets/Images/EnregistrementReloadFestival.mp4";
import RFM from "../assets/Images/EnregistrementReloadFestivalMobile.mp4";
import TV from "../assets/Images/EnregistrementTuumVehiculum.mp4";
import TVM from "../assets/Images/EnregistrementTuumVehiculumMobile.mp4";
import imageRF from "../assets/Images/reloadFestival.png";
import imageRFM from "../assets/Images/ReloadFestivalM.png";
import imageTV from "../assets/Images/TuumVehiculumLT.png";
import imageTVM from "../assets/Images/TuumVehiculum.png";
import ProjectCardRight from "./ProjectCardRight";
import ProjectCardLeft from "./ProjectCardLeft";

import ProjectCaroussel from "./ProjectCaroussel";

function Projects() {
  const [isMobile, setIsMobile] = useState(true);

  const { language } = useLanguageContext();

  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  window.addEventListener("resize", handleResize);

  const originDigital = {
    photo: OD,
    type: "photo",
    title: "Origins Digital",
    descriptionEnglish:
      "This project is designed to replicate the core features of a video streaming platform. It includes user authentication, a dynamic content library, search functionality, personalized playlists, and responsive design for multiple devices.",
    descriptionFrench:
      "Ce projet est conçu pour reproduire les fonctionnalités principales d'une plateforme de streaming vidéo. Il inclut l'authentification des utilisateurs, une bibliothèque de contenu dynamique, une fonctionnalité de recherche, des playlists personnalisées et un design responsive pour tout type d'appareil.",
    technologies: ["React", "Tailwind", "Express", "MySQL", "Figma"],
    githubLink:
      "https://github.com/annieccar/Project3-WildCodeSchool-Origins_Digital",
    siteLink: "https://origins-digital.anniec.eu/",
  };

  const bumpToBundle = {
    photo: BTB,
    type: "photo",
    title: "Bump To Bundle",
    descriptionEnglish:
      "This personal project aims to create a customized birthlist that can be shared with friends and family. Users can create a list where gifts are sorted by categories, and provide purchase links, photos, and details for each item. Once a gift is selected by someone, it becomes unavailable for others to choose, ensuring an organized gifting experience.",
    descriptionFrench:
      "Ce projet personnel vise à créer une liste de naissance personnalisée à partager avec des amis et la famille. Les utilisateurs peuvent créer une liste où les cadeaux sont triés par catégories et fournir des liens d'achat, des photos et des détails pour chaque article. Une fois qu'un cadeau est sélectionné par quelqu'un, il devient indisponible pour les autres, assurant ainsi une expérience de cadeau unique et organisée.",
    technologies: ["React", "Styled Components", "Express", "MySQL"],
    githubLink: "https://github.com/annieccar/Bump_To_Bundle",
    siteLink: "https://mybirthlist.anniec.eu/",
  };

  const ReloadFestival = {
    photo: RF,
    photoMobile: RFM,
    image: imageRF,
    imageMobile: imageRFM,
    type: "video",
    title: "Reload Festival",
    descriptionEnglish:
      "This project showcases a fictional music festival where users can explore the line-up and schedule, view detailed information about each artist available in the Spotify API, and purchase tickets. Users can also filter artists, view a map of the festival grounds, and add their favorite artists and show dates to a personalized favorites list.",
    descriptionFrench:
      "Ce projet présente un festival de musique fictif où les utilisateurs peuvent explorer la programmation et le calendrier, voir des informations détaillées sur chaque artiste disponibles via l'API Spotify et acheter des billets. Les utilisateurs peuvent également filtrer les artistes, voir une carte du site du festival et ajouter leurs artistes préférés et les dates des spectacles à une liste de favoris personnalisée.",
    technologies: ["React", "SASS", "Spotify API", "Express", "Figma"],
    githubLink:
      "https://github.com/annieccar/Project2-WildCodeSchool-ReloadFestival",
    siteLink: "",
  };

  const TuumVehiculum = {
    photo: TV,
    photoMobile: TVM,
    image: imageTV,
    imageMobile: imageTVM,
    type: "video",
    title: "Tuum Vehiculum",
    descriptionEnglish:
      "This project was developed during a 2-day hackathon. Tasked with presenting a project that combines technology with history, we decided to create a medieval version of Uber. This platform enables users to book transportation between two cities, offering a selection of various means of travel typical of the Middle Age.",
    descriptionFrench:
      "Ce projet a été réalisé lors d'un hackathon de 2 jours. Ayant pour objectif de présenter un projet alliant technologie et histoire, nous avons choisi de créer cette version médiévale d'Uber. Cette plateforme permet à un utilisateur de réserver une course en choisissant parmi plusieurs moyens de transport entre deux villes, ainsi que de sélectionner des options supplémentaires au choix.",
    technologies: ["React", "Tailwind", "Express", "MySQL"],
    githubLink: "https://github.com/annieccar/Hackaton-UberDuMoyenAge",
    siteLink: "",
  };

  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.title}>
        {language == "english" ? "My Projects" : "Mes projets"}
      </h1>
      {!isMobile ? (
        <>
          <ProjectCardRight {...originDigital} />
          <ProjectCardLeft {...bumpToBundle} />
          <ProjectCardRight {...ReloadFestival} />
          <ProjectCardLeft {...TuumVehiculum} />
        </>
      ) : (
        <ProjectCaroussel
          projects={[
            originDigital,
            bumpToBundle,
            ReloadFestival,
            TuumVehiculum,
          ]}
        />
      )}
    </section>
  );
}

export default Projects;
