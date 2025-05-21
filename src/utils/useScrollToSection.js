import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToSection = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Get the element by id (removing the # from the hash)
      const element = document.getElementById(location.hash.slice(1));
      
      // If the element exists, scroll to it
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
};

export default useScrollToSection; 