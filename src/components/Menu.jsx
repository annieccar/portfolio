import styles from "../styles/Menu.modules.scss";

function Menu() {
  return (
    <div className={styles.menu}>
      <p className={styles.item}>About Me</p>
      <p className={styles.item}>My projects</p>
      <p className={styles.item}>Resume</p>
      <p className={styles.item}>Contact Me</p>
    </div>
  );
}

export default Menu;
