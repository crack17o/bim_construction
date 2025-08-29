import React from 'react';
import styled from 'styled-components';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import ProjectCard from '../molecules/ProjectCard';



const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Portfolio = () => {
  const projects = [
   {
  id: 1,
  image: './img/WhatsApp Image 2025-08-28 at 08.33.34.jpeg',
  title: 'Chantier Annexe R+1',
  category: 'Bâtiment Résidentiel',
  description: "Projet réalisé en 2023 à Kinshasa. Fondation assurée par BIM Construction (maître d'œuvre), pour un maître d'ouvrage privé."
}
,
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
          Découvrez quelques-uns de nos projets phares qui démontrent notre expertise et notre engagement envers l'excellence.
        </Text>
        
        <ProjectsGrid>
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};

export default Portfolio;
