import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRoad, FaHome, FaClipboardList, FaProjectDiagram } from 'react-icons/fa';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import FeatureBox from '../molecules/FeatureBox';

// Grid fixée à 4 colonnes
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Wrapper animé et stylé
const AnimatedFeatureBox = styled(motion.div)`
  border-radius: 16px; /* radius doux */
  padding: 20px; /* bon padding interne */
  background: #fff; /* fond blanc propre */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.12); /* ombre douce, neutre */
  }
`;

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaRoad />,
      title: 'Travaux publics',
      description:
        'Construction de routes, ponts, assainissement et infrastructures pour améliorer les communautés.'
    },
    {
      id: 2,
      icon: <FaHome />,
      title: 'Rénovation & réhabilitation',
      description:
        'Rénovation et remise à neuf de bâtiments existants tout en respectant leur structure d’origine.'
    },
    {
      id: 3,
      icon: <FaClipboardList />,
      title: 'Études techniques',
      description:
        'Études approfondies et suivi rigoureux de projets pour garantir conformité et qualité.'
    },
    {
      id: 4,
      icon: <FaProjectDiagram />,
      title: 'Conseil en ingénierie',
      description:
        'Accompagnement et gestion de chantier pour optimiser vos projets et garantir leur succès.'
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
            <AnimatedFeatureBox
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: 'easeOut'
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
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
