import { useLanguageContext } from "../contexts/LanguageContext";
import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <section className={styles.container}>
      <p className={styles.paragraph}>
        © 2023 Designed & built by Annie Croteau-Carignan
      </p>
    </section>
  );
}

export default Footer;
