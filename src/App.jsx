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

const theme = {
  colors: {
    primary: '#0B2545', // Bleu Foncé
    white: '#FFFFFF',
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

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Values />
        <Portfolio />
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
