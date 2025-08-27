import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

// Import a temporary placeholder image for the hero
import HeroBgImage from '../../assets/hero-bg.jpg';

const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.colors.primary};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${HeroBgImage});
    background-size: cover;
    background-position: center;
    opacity: 0.15;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 650px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Container>
        <HeroContent>
          <Heading $as="h1" light mb="20px">
            Des solutions de construction de qualité pour tous vos projets
          </Heading>
          <Text light size="large" maxWidth="550px">
            BIM Construction est votre partenaire de confiance en République Démocratique du Congo 
            pour la construction de bâtiments, routes et infrastructures civiles.
          </Text>
          <ButtonGroup>
            <Link to="contact" smooth={true} duration={500}>
              <Button>
                Demander un devis <FaArrowRight />
              </Button>
            </Link>
            <Link to="services" smooth={true} duration={500}>
              <Button variant="white" outline>
                Nos services
              </Button>
            </Link>
          </ButtonGroup>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
