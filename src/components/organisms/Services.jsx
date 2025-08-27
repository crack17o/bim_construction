import React from 'react';
import styled from 'styled-components';
import { FaBuilding, FaRoad, FaHome, FaClipboardCheck, FaChartLine } from 'react-icons/fa';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import FeatureBox from '../molecules/FeatureBox';

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaBuilding />,
      title: 'Construction de bâtiments',
      description: 'Construction de bâtiments résidentiels et commerciaux adaptés à vos besoins avec des matériaux de qualité et une expertise reconnue.'
    },
    {
      id: 2,
      icon: <FaRoad />,
      title: 'Travaux publics',
      description: 'Réalisation de travaux publics incluant routes, ponts et systèmes d\'assainissement pour améliorer les infrastructures locales.'
    },
    {
      id: 3,
      icon: <FaHome />,
      title: 'Rénovation et réhabilitation',
      description: 'Services de rénovation et réhabilitation de bâtiments existants pour leur donner une seconde vie tout en respectant leur structure d\'origine.'
    },
    {
      id: 4,
      icon: <FaClipboardCheck />,
      title: 'Études techniques',
      description: 'Études techniques complètes et suivi rigoureux de projets pour garantir des résultats conformes aux normes et aux attentes.'
    },
    {
      id: 5,
      icon: <FaChartLine />,
      title: 'Conseil en ingénierie',
      description: 'Services de conseil en ingénierie et gestion de chantier pour optimiser vos projets et garantir leur bon déroulement.'
    }
  ];

  return (
    <Section id="services">
      <Container>
        <Heading center underline>
          Nos Services
        </Heading>
        <Text center maxWidth="700px" style={{ margin: '0 auto 30px' }}>
          BIM Construction propose une gamme complète de services pour répondre à tous vos besoins en matière de construction et d'infrastructure.
        </Text>
        
        <ServicesGrid>
          {services.map(service => (
            <FeatureBox 
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              center
            />
          ))}
        </ServicesGrid>
      </Container>
    </Section>
  );
};

export default Services;
