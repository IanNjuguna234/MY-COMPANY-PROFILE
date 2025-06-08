import React from 'react';
import styles from './MyServices.module.css';

import frontEndImage from './images/front-end.jpg';
import backEndImage from './images/back-end.jpg';
import fullStackImage from './images/full-stack.jpg';
import uiUxImage from './images/ui-ux.jpg';
import cmsImage from './images/cms.jpg';
import graphicDesignImage from './images/graphic.jpg';
import brandingImage from './images/branding.jpg';

function MyServices() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Our Services</h2>
      <p className={styles.intro}>
        I offer a range of services to help you with your web development needs. Here are some of my specialties:
      </p>
      <div className={styles.servicesGrid}>
        <article className={styles.serviceCard}>
          <img src={frontEndImage} alt="Front-end Development" className={styles.serviceImage} />
          <h3>Front-end Development</h3>
          <p>React, JavaScript, HTML, CSS</p>
        </article>
        <article className={styles.serviceCard}>
          <img src={backEndImage} alt="Back-end Development" className={styles.serviceImage} />
          <h3>Back-end Development</h3>
          <p>Node.js, Express, databases</p>
        </article>
        <article className={styles.serviceCard}>
          <img src={fullStackImage} alt="Full-stack Development" className={styles.serviceImage} />
          <h3>Full-stack Development</h3>
          <p>Combining front-end and back-end</p>
        </article>
        <article className={styles.serviceCard}>
          <img src={uiUxImage} alt="UI/UX Design" className={styles.serviceImage} />
          <h3>UI/UX Design</h3>
          <p>User-friendly and visually appealing interfaces</p>
        </article>
        <article className={styles.serviceCard}>
          <img src={cmsImage} alt="CMS Development" className={styles.serviceImage} />
          <h3>CMS Development</h3>
          <p>Building systems for managing website content</p>
        </article>
        <article className={styles.serviceCard}>
          <img src={graphicDesignImage} alt="Graphic Design" className={styles.serviceImage} />
          <h3>Graphic Design</h3>
          <p>Creative designs for digital and print media</p>
        </article>
        <article className={styles.serviceCard}>
          <img src={brandingImage} alt="Branding" className={styles.serviceImage} />
          <h3>Branding</h3>
          <p>Brand identity for T-shirts, caps, jerseys, and more</p>
        </article>
      </div>

      <div className={styles.additionalInfo}>
        <p>
          We offer reliable services ensuring nothing but full customer satisfaction. Our services are budget-friendly and time sensitive. We ensure full data privacy for our clients and their systems.
        </p>
        <p>
          Feel free to contact me with any projects or questions. For more information, email me at <a href="mailto:ianmwan6@gmail.com" className={styles.link}>ianmwan6@gmail.com</a> or WhatsApp me at <a href="https://wa.me/254702169678" target="_blank" rel="noreferrer" className={styles.link}>+254702169678</a>.
        </p>
      </div>
    </section>
  );
}

export default MyServices;
