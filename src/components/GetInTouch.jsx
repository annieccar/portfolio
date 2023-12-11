import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/GetInTouch.module.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqkvell");
  console.log(state);

  if (state.succeeded) {
    return (
      <p className={styles.submissionConfirmation}>
        Thank you for your message, I will get back to you very soon!
      </p>
    );
  }
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Get in touch</h1>
      <p className={styles.paragraph}>
        I am always interested in hearing about new opportunities. If you’d like
        to collaborate with me or you just want to have a chat, don’t hesitate
        to contact me, I’ll get back to you as soon as I can.{" "}
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Full Name:
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
          Email Address:
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
          Your Message:
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
