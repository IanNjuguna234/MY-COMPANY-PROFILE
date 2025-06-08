import React from 'react';
import './Projects.css'; 
import image from './founderImage.jpg';
import map from './un-members.png';
import leaf from './leaf.png';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

function MyProjects() {
  return (
    <div className="my-projects">
      <h2>Our Projects</h2>
      <p>
        I'm proud to showcase some of the exciting projects I've worked on or are currently in progress. Here's a brief overview:
      </p>
      <div className="project-grid">
        <div className="project-frame">
          <div className="image-container">
            <img src={image} alt="Regional Programme Database" />
            <h3>Regional Programme Database</h3>
            <p>
              A platform designed to facilitate information management, coordination, data collection from UN-Habitat's regional and country activities. The database serves as a central hub for gathering and processing data from the field.
            </p>
            <a href="https://staging.urbanagendaplatform.org/home" target="_blank" rel="noopener noreferrer">
              Visit the site
            </a>
          </div>
        </div>
        <div className="project-frame">
          <div className="image-container">
            <img src={leaf} alt="Chaimuka Tea Application" />
            <h3>Chaimuka Tea Application</h3>
            <p>
              A tea application that integrates machine learning in detecting tea diseases when you take or scan an image of a tea leaf/plant.
            </p>
            {/* Add a link to the application or a demo if available */}
          </div>
        </div>
        <div className="project-frame">
          <div className="image-container">
            <img src={map} alt="Global Map of UN Habitat Offices" />
            <h3>Global Map of UN Habitat Offices</h3>
            <p>
              An interactive map that shows the various offices of the UN Habitat across the world in various countries.
            </p>
            <a href="https://staging.urbanagendaplatform.org/globalpresence" target="_blank" rel="noopener noreferrer">
              Show the presence
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"Ian was instrumental in setting up our internal database system. He’s reliable and always eager to solve challenges."</p>
            <p className="testimonial-author">– Derrick Ngala, UN Consultant</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"Professional and detail-oriented. Ian's contributions during the General Assembly preparations were top-notch."</p>
            <p className="testimonial-author">– Alain Kanyinda, Programme Management Officer, UN Habitat</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyProjects;
