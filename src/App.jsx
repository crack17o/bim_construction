import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import About from './components/organisms/About';
import Services from './components/organisms/Services';
import Values from './components/organisms/Values';
import Portfolio from './components/organisms/Portfolio';
import Team from './components/organisms/Team';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Galerie from './components/organisms/Galerie';

const theme = {
  colors: {
    primary: '#130866',
    white: '#FFFFFF',
    myblue: '#0065D1',
    lightGrey: '#F5F5F5',
    grey: '#DDDDDD',
    darkGrey: '#333333',
    overlay: 'rgba(11, 37, 69, 0.8)',
  },
  fonts: {
    main: "'Poppins', sans-serif",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  }
};

const AppContainer = styled.div`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.darkGrey};
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  opacity: ${props => props.visible ? '1' : '0'};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.darkGrey};
  }
`;

// Cercles du curseur
const CursorCircle = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  border-radius: 50%;
  border: 2px solid ${props => props.color};
  z-index: 9999;
`;

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Motion values pour lag fluide
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };

  const circle1X = useSpring(mouseX, springConfig);
  const circle1Y = useSpring(mouseY, springConfig);
  const circle2X = useSpring(mouseX, { ...springConfig, stiffness: 200 });
  const circle2Y = useSpring(mouseY, { ...springConfig, stiffness: 200 });
  const circle3X = useSpring(mouseX, { ...springConfig, stiffness: 150 });
  const circle3Y = useSpring(mouseY, { ...springConfig, stiffness: 150 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);

    const handleMouseMove = e => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {/* Trois cercles avec lag */}
        <CursorCircle
          style={{ width: 15, height: 15, x: circle1X, y: circle1Y }}
          color={theme.colors.primary}
        />
        <CursorCircle
          style={{ width: 25, height: 25, x: circle2X, y: circle2Y }}
          color={theme.colors.myblue}
        />
        <CursorCircle
          style={{ width: 35, height: 35, x: circle3X, y: circle3Y }}
          color={theme.colors.white}
        />

        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Galerie/>
        <Team />
        <Contact />
        <Footer />

        <ScrollToTopButton visible={showScrollToTop} onClick={scrollToTop}>
          <FaArrowUp />
        </ScrollToTopButton>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
