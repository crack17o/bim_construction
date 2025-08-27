import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { Link } from 'react-scroll';

// Import a placeholder image for the about section
import AboutImageSrc from '../../assets/about-image.jpg';

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 450px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

const AboutContent = styled.div``;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 25px 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  
  svg {
    color: ${props => props.theme.colors.primary};
    margin-right: 10px;
    margin-top: 5px;
  }
`;

const About = () => {
  return (
    <Section id="about" bg="lightGrey">
      <Container>
        <AboutWrapper>
          <AboutImage>
            <img src={AboutImageSrc} alt="BIM Construction" />
          </AboutImage>
          <AboutContent>
            <Heading underline>
              À propos de nous
            </Heading>
            <Text>
              BIM Construction est une entreprise de construction évoluant en République Démocratique du
              Congo. Notre objectif est de fournir des services de construction de qualité, fiables et adaptés aux
              besoins des clients publics et privés.
            </Text>
            <FeatureList>
              <FeatureItem>
                <FaCheck />
                <Text mb="0">Société à Responsabilité Limitée (SARL) basée à Kinshasa</Text>
              </FeatureItem>
              <FeatureItem>
                <FaCheck />
                <Text mb="0">Spécialiste en bâtiments, routes et infrastructures civiles</Text>
              </FeatureItem>
              <FeatureItem>
                <FaCheck />
                <Text mb="0">Plus de 10 ans d'expérience dans le secteur de la construction</Text>
              </FeatureItem>
              <FeatureItem>
                <FaCheck />
                <Text mb="0">Équipe d'ingénieurs et de techniciens qualifiés</Text>
              </FeatureItem>
            </FeatureList>
            <Link to="contact" smooth={true} duration={500}>
              <Button>
                Contactez-nous
              </Button>
            </Link>
          </AboutContent>
        </AboutWrapper>
      </Container>
    </Section>
  );
};

export default About;
