import React, { useState } from 'react';
import styles from './Home.module.css';
import image from './image1.png'; // Replace with your image URL

function Home() {
  const [showModal, setShowModal] = useState(null); // 'resume' | 'certificates' | null

  const handleOpenModal = (type) => {
    setShowModal(type);
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Your Partner in Tech Excellence</h1>
      </header>
      <div className={styles.backgroundImageContainer}>
        <img
          src={image}
          alt="Background"
          className={styles.backgroundImage}
        />
      </div>
      <main className={styles.descriptionContainer}>
        <p>
          Welcome to CypherCloud IT Solutions, where innovation meets expertise. We're a cutting-edge technology company that empowers businesses to thrive in a rapidly evolving digital landscape. 
          Our comprehensive suite of IT services covers everything from hardware maintenance to software development, ensuring that your organization stays ahead of the curve. 
          From infrastructure design to application development, our team of experts will work closely with you to craft tailored solutions that drive growth, enhance efficiency, and reduce costs.
          Whether you're a startup or an enterprise, our mission is to help you harness the power of technology to achieve your goals.
        </p>

      </main>
      {/* <footer className={styles.footer}>
        <p>© 2025 CypherCloud IT Solutions. All Rights Reserved.</p>
        <nav className={styles.footerLinks} aria-label="Footer navigation">
          <button 
            onClick={() => handleOpenModal('resume')} 
            className={styles.linkButton}
            aria-haspopup="dialog"
            aria-controls="resume-modal"
          >
            Resume
          </button>
          <button 
            onClick={() => handleOpenModal('certificates')} 
            className={styles.linkButton}
            aria-haspopup="dialog"
            aria-controls="certificates-modal"
          >
            Certificates
          </button>
        </nav>
      </footer> */}

      {/* Resume Modal */}
      {showModal === 'resume' && (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="resume-title" id="resume-modal">
          <div className={styles.modalContent}>
            <button 
              className={styles.close} 
              onClick={handleCloseModal} 
              aria-label="Close Resume Modal"
            >
              &times;
            </button>
            <h2 id="resume-title" className={styles.modalTitle}>Resume</h2>
            <div className={styles.pdfContainer}>
              <iframe 
                src="/IAN MWANGI CV.pdf" 
                title="Resume PDF"
                frameBorder="0"
                className={styles.pdfViewer}
                aria-describedby="resume-desc"
              />
            </div>
            <p id="resume-desc" className={styles.pdfDescription}>
              If the resume does not display, you can <a href="/IAN MWANGI CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>download the resume here</a>.
            </p>
          </div>
        </div>
      )}

      {/* Certificates Modal */}
      {showModal === 'certificates' && (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="certificates-title" id="certificates-modal">
          <div className={styles.modalContent}>
            <button 
              className={styles.close} 
              onClick={handleCloseModal} 
              aria-label="Close Certificates Modal"
            >
              &times;
            </button>
            <h2 id="certificates-title" className={styles.modalTitle}>Certificates</h2>
            <div className={styles.pdfContainer}>
              <iframe 
                src="/certificates.pdf" 
                title="Certificates PDF"
                frameBorder="0"
                className={styles.pdfViewer}
                aria-describedby="certificates-desc"
              />
            </div>
            <p id="certificates-desc" className={styles.pdfDescription}>
              If the certificates do not display, you can <a href="/certificates.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>view them here</a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

