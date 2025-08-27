import React from 'react';
import styled from 'styled-components';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import ProjectCard from '../molecules/ProjectCard';

// Import placeholder images for projects
import Project1Image from '../../assets/project-1.jpg';
import Project2Image from '../../assets/project-2.jpg';
import Project3Image from '../../assets/project-3.jpg';
import Project4Image from '../../assets/project-4.jpg';

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
      image: Project1Image,
      title: 'Tour Résidentielle Moderna',
      category: 'Bâtiment Résidentiel',
      description: 'Construction d\'une tour résidentielle de 12 étages avec des appartements de luxe et des installations modernes.'
    },
    {
      id: 2,
      image: Project2Image,
      title: 'Route Nationale N7',
      category: 'Infrastructure Routière',
      description: 'Réhabilitation et élargissement de 45 km de route nationale avec mise en place de systèmes de drainage.'
    },
    {
      id: 3,
      image: Project3Image,
      title: 'Centre Commercial Kinshasa',
      category: 'Bâtiment Commercial',
      description: 'Construction d\'un centre commercial de 25 000 m² comprenant 50 magasins, restaurants et espaces de loisirs.'
    },
    {
      id: 4,
      image: Project4Image,
      title: 'Pont sur la rivière N\'djili',
      category: 'Infrastructure Civile',
      description: 'Construction d\'un pont de 120 mètres enjambant la rivière N\'djili, avec voies piétonnes et voies pour véhicules.'
    }
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
