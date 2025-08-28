import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaRoad, FaHome, FaClipboardList, FaProjectDiagram } from 'react-icons/fa';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import FeatureBox from '../molecules/FeatureBox';

// Animation keyframes
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// On ajoute un wrapper animé pour chaque feature
const AnimatedFeatureBox = styled.div`
  animation: ${fadeInUp} 1.5s ease forwards;
  opacity: 0; // départ invisible
  animation-delay: ${props => props.delay}s;
`;

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaRoad />,
      title: 'Travaux publics',
      description: 'Construction de routes, ponts, assainissement et infrastructures pour améliorer les communautés.'
    },
    {
      id: 2,
      icon: <FaHome />,
      title: 'Rénovation & réhabilitation',
      description: 'Rénovation et remise à neuf de bâtiments existants tout en respectant leur structure d’origine.'
    },
    {
      id: 3,
      icon: <FaClipboardList />,
      title: 'Études techniques',
      description: 'Études approfondies et suivi rigoureux de projets pour garantir conformité et qualité.'
    },
    {
      id: 4,
      icon: <FaProjectDiagram />,
      title: 'Conseil en ingénierie',
      description: 'Accompagnement et gestion de chantier pour optimiser vos projets et garantir leur succès.'
    }
  ];

  return (
    <Section id="services">
      <Container>
        <Heading center underline>
          Nos Services
        </Heading>
        <Text center maxWidth="700px" style={{ margin: '0 auto 30px' }}>
          BIM Construction offre une gamme complète de services fiables et professionnels pour tous vos projets.
        </Text>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <AnimatedFeatureBox key={service.id} delay={index * 0.2}>
              <FeatureBox 
                icon={service.icon}
                title={service.title}
                description={service.description}
                center
              />
            </AnimatedFeatureBox>
          ))}
        </ServicesGrid>
      </Container>
    </Section>
  );
};

export default Services;
