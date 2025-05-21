import React from 'react';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import useScrollToSection from '../utils/useScrollToSection';

const Home = () => {
  // Use the custom hook to handle scrolling to sections
  useScrollToSection();

  return (
    <>
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
};

export default Home; 