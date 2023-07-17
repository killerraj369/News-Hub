import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './ScrollToTopButton.css'; // Create this file to style the button (optional)

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad', // Use easing function for smooth scroll
      delay: 100 // Delay in milliseconds before scroll starts
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top-button" onClick={scrollToTop}>
          &#8679;
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
