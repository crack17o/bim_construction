import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaMedal, FaBalanceScale, FaLightbulb, FaHandshake } from 'react-icons/fa';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const AboutWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  height: 450px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.05) rotate(1deg);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

const AboutContent = styled(motion.div)``;

const FeatureList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 25px 0;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;

  svg {
    color: ${props => props.theme.colors.primary};
    margin-right: 10px;
    margin-top: 3px;
    flex-shrink: 0;
  }
`;

const ValuesGrid = styled(motion.div)`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const About = () => {
  // Variants pour animations douces
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 60, damping: 25, duration: 1 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 60, damping: 25, duration: 1, delay: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 20, duration: 0.8 } }
  };

  return (
    <Section id="about" bg="lightGrey">
      <Container>
        <AboutWrapper
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <AboutImage
            variants={imageVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <img 
              src='https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756484962/127174966_196330778617177_4932444773204197204_n_ahdwr4.jpg' 
              alt="BIM Construction" 
            />
          </AboutImage>

          <AboutContent variants={contentVariants}>
            <Heading underline as={motion.h2} variants={itemVariants}>
              À propos de nous
            </Heading>
            <Text as={motion.p} variants={itemVariants}>
              BIM Construction, créée en 2022, offre des solutions fiables, modernes et durables en RDC.
            </Text>

            <FeatureList>
              {[
                "Services fiables et de qualité",
                "Bâtiments, routes et infrastructures",
                "Équipe d’ingénieurs qualifiés"
              ].map((text, i) => (
                <FeatureItem key={i} variants={itemVariants}>
                  <FaCheck /><Text mb="0">{text}</Text>
                </FeatureItem>
              ))}
            </FeatureList>

            <Heading size="medium" mb="10px" as={motion.h3} variants={itemVariants}>Nos valeurs</Heading>
            <ValuesGrid>
              {[
                { icon: <FaMedal />, label: "Excellence" },
                { icon: <FaBalanceScale />, label: "Intégrité" },
                { icon: <FaLightbulb />, label: "Innovation" },
                { icon: <FaHandshake />, label: "Engagement" }
              ].map((val, i) => (
                <ValueCard key={i} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                  {val.icon}<Text mb="0">{val.label}</Text>
                </ValueCard>
              ))}
            </ValuesGrid>

            <Link to="contact" smooth={true} duration={500}>
              <Button as={motion.button} variants={itemVariants} whileHover={{ scale: 1.05 }} style={{ marginTop: "20px" }}>
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
