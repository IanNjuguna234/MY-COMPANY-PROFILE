import React from 'react';
import companyImage from './logo.png'; // Replace with the path to your company image
import founderImage from './founderImage.jpg'; // Replace with the path to your founder image
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.companySection}>
        <img src={companyImage} alt="CypherCloud IT Solutions Kenya" className={styles.companyImage} />
        <div className={styles.companyDescription}>
          <h2>About CypherCloud IT Solutions Kenya</h2>
          <p>
            CypherCloud IT Solutions Kenya is a leading technology company dedicated to providing innovative solutions in the fields of web and application programming, networking, data analysis, machine learning, graphic design, and artificial intelligence. 
            Our mission is to empower businesses with cutting-edge technology to enhance their operations and achieve their goals.
          </p>
          <p>
            At CypherCloud IT Solutions Kenya, we are committed to delivering high-quality, reliable, and efficient IT solutions to our clients. 
            We believe in continuous learning and staying at the forefront of technological advancements to provide the best possible services.
          </p>
        </div>
      </div>
      <div className={styles.founderSection}>
        <img src={founderImage} alt="Founder" className={styles.founderImage} />
        <div className={styles.founderDescription}>
          <h2>About the Founder</h2>
          <p>
            Ian Mwangi is a highly motivated and results-oriented IT professional with a strong work ethic and a passion for technology. 
            He is seeking a challenging position to leverage his technical skills and experience in data collection, system administration, and network management to contribute to the success of an organization.
          </p>
          <p>
            <strong>Contact Information:</strong><br />
            Email: <a href="mailto:ianmwan6@gmail.com">ianmwan6@gmail.com</a><br />
            Phone: <a href="tel:+254702169678">+254702169678</a><br />
            Location: Nairobi, Kenya
          </p>
          <h3>Education</h3>
          <ul>
            <li>Study Program, Certified Information System Auditing - Strathmore University (02/2024 - Present)</li>
            <li>BSc Information Technology - Dedan Kimathi University Of Technology (05/2019 - 12/2022)</li>
            <li>KCSE High School - Mang'u High School (02/2015 - 11/2018)</li>
          </ul>
          <h3>Work Experience</h3>
          <ul>
            <li><strong>Claims Assistant</strong> at Penda Health (04/2024 – 06/2024)
              <ul>
                <li>Processed and reviewed insurance claims to ensure completeness and accuracy.</li>
                <li>Communicated with insurance companies to follow up on claim status.</li>
                <li>Assisted patients with insurance-related inquiries and provided necessary support.</li>
                <li>Maintained and updated patient records with claim information.</li>
                <li>Ensured compliance with all regulatory and company policies during the claims process.</li>
              </ul>
            </li>
            <li><strong>IT Intern</strong> at UN HABITAT (05/2023 - 12/2023)
              <ul>
                <li>Facilitated planning for the UN Habitat General Assembly.</li>
                <li>Designed a database system for UN Habitat.</li>
                <li>Conducted data collection and management.</li>
                <li>Developed an interactive map showing the global presence of UN HABITAT.</li>
              </ul>
            </li>
            <li><strong>Presiding Officer</strong> at Independent Electoral And Boundaries Commission (08/2022)
              <ul>
                <li>Supervised the electoral process.</li>
                <li>Counted total votes at the station.</li>
                <li>Ensured transparency throughout the election.</li>
                <li>Announced the winner of the elected person.</li>
              </ul>
            </li>
            <li><strong>IT Attaché</strong> at Kenya Tea Development Agency Limited (01/2022 - 05/2022)
              <ul>
                <li>Installed and configured routers, switches, and Cisco servers.</li>
                <li>System administration and hardware maintenance.</li>
                <li>Provided general user support.</li>
              </ul>
            </li>
          </ul>
          <h3>Skills</h3>
          <ul>
            <li>Technical Skills: Networking, System Administration, Hardware Maintenance, Database Design, Data Collection & Management, Interactive Map Development</li>
            <li>Soft Skills: Communication, Teamwork, Problem-Solving, Customer Service, Time Management</li>
          </ul>
          <h3>Personal Projects</h3>
          <ul>
            <li>Chaimuka Application (05/2022 - Present)</li>
            <li>Car Rental System (10/2021 - Present)</li>
          </ul>
          <h3>Clubs</h3>
          <ul>
            <li>Dekut Cybersecurity Club (01/2021 - Present)</li>
            <li>IBM Innovation Club Dekut (02/2021 - Present)</li>
          </ul>
          <h3>Certificates</h3>
          <ul>
            <li>Cisco Networking CCNA (08/2019 - 11/2019)</li>
            <li>Presidential Awards - Gold (05/2015 - 03/2019)</li>
            <li>St. John's Ambulance</li>
            <li>Cisco Cybersecurity (11/2020 - 01/2021)</li>
          </ul>
          <h3>Languages</h3>
          <ul>
            <li>English - Full Professional Proficiency</li>
            <li>Kiswahili - Full Professional Proficiency</li>
          </ul>
          <h3>Interests</h3>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Data Science</li>
            <li>Robotics</li>
            <li>Software and Application Development</li>
          </ul>
          <h3>Referees</h3>
          <ul>
            <li>Derrick Ngala - UN Consultant (Derrick.ngala@un.org)</li>
            <li>Alain Kanyinda - Programme Management Officer, UN HABITAT (alain.kayinda@un.org)</li>
            <li>Kelvin Kinoti - ICT Officer, Kenya Tea Development Agency Limited (kkinoti@ktdateas.com)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
