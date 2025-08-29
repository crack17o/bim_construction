import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import ProjectCard from '../molecules/ProjectCard';

// Grid fixée avec responsive
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// Animation wrapper pour chaque carte
const AnimatedCard = styled(motion.div)`
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  padding: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756484671/WhatsApp_Image_2025-08-28_at_08.33.34_pzxnec.jpg',
      title: 'Chantier Annexe R+1',
      category: 'Bâtiment Résidentiel',
      description: "Projet réalisé en 2023 à Kinshasa. Fondation assurée par BIM Construction (maître d'œuvre), pour un maître d'ouvrage privé."
    },
    {
      id: 4,
      image: './img/WhatsApp Image 2025-08-25 at 21.37.22.jpeg',
      title: 'Immeuble Résidentiel R+2',
      category: 'Bâtiment Résidentiel',
      description: "Projet situé à Kinshasa (2024). Réalisé par BIM Construction (maître d'œuvre) pour un maître d'ouvrage privé. Phase actuelle : coulage du plancher R+1."
    },
    {
      id: 3,
      image: './img/IMG_20250823_110903_093.jpg',
      title: 'Bâtiment Annexe et Commercial',
      category: 'Bâtiment Commercial',
      description: "Projet situé à Bunia, Ituri (2025). Conçu et réalisé par BIM Construction (maître d'œuvre), pour un maître d'ouvrage privé."
    },
    {
      id: 5,
      image: './img/WhatsApp Image 2025-08-25 at 21.37.26.jpeg',
      title: 'Villa Moderne R+1',
      category: 'Bâtiment Résidentiel',
      description: "Projet situé à Boma, Kongo-Centrale (2025). Réalisé par BIM Construction (maître d'œuvre) pour un maître d'ouvrage privé. Phase actuelle : gros œuvre."
    },
  ];

  return (
    <Section id="portfolio" bg="lightGrey">
      <Container>
        <Heading center underline>
          Notre Portfolio
        </Heading>
        <Text center maxWidth="700px" style={{ margin: '0 auto 30px' }}>
          Voici quelques-uns de nos projets récents, témoignant de notre expertise et de notre engagement envers l’excellence.
        </Text>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <AnimatedCard
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
              />
            </AnimatedCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};

export default Portfolio;
