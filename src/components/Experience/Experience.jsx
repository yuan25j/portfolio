import React from "react";
import "./Experience.css";
import { experience } from "../../data/portfolio";
import ReactMarkdown from "react-markdown";
import truistLogo from "../../assets/truist.png";
import uncCompSciLogo from "../../assets/uncCompSci.png";
import carolinaHousingLogo from "../../assets/carolina Housing.png";

const Experience = () => {
  const { title, experiences } = experience;
  
  // Function to get the correct logo based on company name
  const getLogoForCompany = (company) => {
    if (company.includes("Truist")) {
      return truistLogo;
    } else if (company.includes("UNC")) {
      return uncCompSciLogo;
    } else if (company.includes("Carolina")) {
      return carolinaHousingLogo;
    }
    return null;
  };
  
  return (
    <section className="experience" id="experience">
      <h1>{title}</h1>
      <div className="experience-container-grid">
        {experiences.map((experience, index) => (
          <article className="experience-card" key={index}>
            <div className="experience-header">
              <div className="company-logo">
                <img src={getLogoForCompany(experience.company)} alt={experience.company} />
              </div>
              <div className="experience-details">
                <div className="job-title-duration-section">
                  <h2 className="job-title">
                    {experience.title} - <span>{experience.company}</span>
                  </h2>
                  <p className="duration">{experience.duration}</p>
                </div>
                <ReactMarkdown className="experience-description">
                  {experience.description}
                </ReactMarkdown>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
