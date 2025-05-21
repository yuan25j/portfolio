import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { about } from "../../data/portfolio";
import profileImage from "../../assets/profile.png";
import "./About.css";

const About = () => {
  const { title, description, cv, github, linkedin } = about;
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="about-links">
            <a href={github} target="_blank">
              <FaGithub className="icon" size={30} />
            </a>
            <a href={linkedin} target="_blank">
              <FaLinkedinIn className="icon" size={30} />
            </a>
            <a href={cv} target="_blank">
              Download CV
            </a>
          </div>
        </div>
        <div className="profile-image-container">
          <img src={profileImage} alt="John Yuan" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
