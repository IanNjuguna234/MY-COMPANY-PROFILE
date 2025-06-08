import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact Me</h2>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          <p>Get in touch with me through the following channels:</p>
          <ul>
            <li>
              <FaEnvelope /> Email: <a href="mailto:ianmwan6@gmail.com">ianmwan6@gmail.com</a>
            </li>
            <li>
              <FaPhone /> Phone: <a href="tel:+254702169678">+254702169678</a>
            </li>
            <li>
              <FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/me/" target="_blank" rel="noopener noreferrer">ianmwan6</a>
            </li>
            <li>
              <FaTwitter /> Twitter: <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">@ianmwan6</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contactFormContainer}>
        <h3 className={styles.formTitle}>Leave a comment</h3>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
