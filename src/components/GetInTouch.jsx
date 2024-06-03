import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/GetInTouch.module.scss";

import { useLanguageContext } from "../contexts/LanguageContext";

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqkvell");
  const { language } = useLanguageContext();

  if (state.succeeded) {
    return (
      <p className={styles.submissionConfirmation}>
        {language == "english"
          ? "Thank you for your message, I will get back to you very soon!"
          : "Merci pour votre message, je vous répondrai très rapidement!"}
      </p>
    );
  }
  return (
    <div className={styles.section} id="contact">
      <h1 className={styles.title}>
        {language == "english" ? "Get in touch" : "Me contacter"}
      </h1>
      <p className={styles.paragraph}>
        {language == "english"
          ? "If you’d like to collaborate with me or you just want to have a chat, don’t hesitate to contact me, I’ll get back to you as soon as I can"
          : "Si vous souhaitez collaborer ou bien seulement discuter avec moi, n'hésitez pas à me contacter, je vous réponderai dès que possible"}
        .
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          {language == "english" ? "Full Name:" : "Nom et prénom:"}
        </label>
        <input
          className={styles.input}
          id="name"
          type="text"
          name="name"
          required
          minLength={3}
        />
        <ValidationError
          className={styles.error}
          prefix="Name"
          field="name"
          errors={state.errors}
        />
        <label htmlFor="email" className={styles.label}>
          {language == "english" ? "Email address:" : "Adresse mail:"}
        </label>
        <input
          className={styles.input}
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError
          className={styles.error}
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message" className={styles.label}>
          {language == "english" ? "Your message:" : "Votre message:"}
        </label>
        <textarea
          className={styles.textArea}
          id="message"
          name="message"
          type="text"
          required
        />
        <ValidationError
          className={styles.error}
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className={styles.buttonBox}>
          <button
            className={styles.button}
            type="submit"
            disabled={state.submitting}
          ></button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
