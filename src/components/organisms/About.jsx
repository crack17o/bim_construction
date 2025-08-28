import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; // <-- ajout

const AboutWrapper = styled(motion.div)` /* <-- animation globale */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)` /* <-- animation image */
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

const AboutContent = styled(motion.div)``; // <-- animation contenu

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 25px 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  
  svg {
    color: ${props => props.theme.colors.primary};
    margin-right: 10px;
    margin-top: 3px;
  }
`;

const About = () => {
  // animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9, ease: "easeOut", staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section id="about" bg="lightGrey">
      <Container>
        <AboutWrapper
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AboutImage variants={itemVariants}>
            <img src='./img/WhatsApp Image 2025-08-25 at 21.37.28.jpg' alt="BIM Construction" />
          </AboutImage>

          <AboutContent variants={itemVariants}>
            <Heading underline>À propos de nous</Heading>
            <Text>
              BIM Construction, créée en 2022, offre des solutions de construction fiables, modernes et durables en République Démocratique du Congo.
            </Text>

            <FeatureList>
              <FeatureItem>
                <FaCheck />
                <Text mb="0">Offrir des services de construction fiables et de qualité, respectant les délais.</Text>
              </FeatureItem>
              <FeatureItem>
                <FaCheck />
                <Text mb="0">Devenir une référence en construction, en intégrant innovation et expertise BIM.</Text>
              </FeatureItem>
              <FeatureItem>
                <FaCheck />
                <Text mb="0">Spécialisés dans les bâtiments, routes et infrastructures civiles.</Text>
              </FeatureItem>
              <FeatureItem>
                <FaCheck />
                <Text mb="0">Une équipe d’ingénieurs et de techniciens qualifiés à votre service.</Text>
              </FeatureItem>
            </FeatureList>

            <Link to="contact" smooth={true} duration={500}>
              <Button>Contactez-nous</Button>
            </Link>
          </AboutContent>
        </AboutWrapper>
      </Container>
    </Section>
  );
};

export default About;
