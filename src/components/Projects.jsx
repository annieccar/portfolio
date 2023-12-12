import styles from "../styles/Projects.module.scss";
import OD from "../assets/Images/originsDigital.png";
import BTB from "../assets/Images/bumpToBundle.png";
import ProjectCardRight from "./ProjectCardRight";
import ProjectCardLeft from "./ProjectCardLeft";

function Projects() {
  const originDigital = {
    photo: OD,
    title: "Origins Digital",
    description:
      "This is a school project consisting in a video streaming platform allowing several types of users to stream online videos, create favourites playlists, share videos on social medias and more... ",
    technologies: ["React", "Tailwind", "Express", "MySQL", "Figma"],
    githubLink:
      "https://github.com/WildCodeSchool/2023-05-JS-RemoteFR-LaBoulangerieDuCode-P3-origins-digital",
    siteLink: "https://origins-digital.anniec.eu/",
  };

  const bumpToBundle = {
    photo: BTB,
    title: "Bump To Bundle",
    description:
      "This is a personnal project to create a personnalized birthlist and share it with friends and family. A user can create a list in which the gifts are sorted by categories and provide purchase links, photos and details for each gifts. Once a gift has been selected by someone to offer, it is made unavailable for other people to choose.",
    technologies: ["React", "Styled Components", "Express", "MySQL"],
    githubLink:
      "https://github.com/WildCodeSchool/2023-05-JS-RemoteFR-LaBoulangerieDuCode-P3-origins-digital",
    siteLink: "https://mybirthlist.anniec.eu/",
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <ProjectCardRight {...originDigital} />
      <ProjectCardLeft {...bumpToBundle} />
    </section>
  );
}

export default Projects;
