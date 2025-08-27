import React from 'react';
import styled from 'styled-components';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import TeamMember from '../molecules/TeamMember';

// Import placeholder images for team members
import Member1Image from '../../assets/team-1.jpg';
import Member2Image from '../../assets/team-2.jpg';
import Member3Image from '../../assets/team-3.jpg';
import Member4Image from '../../assets/team-4.jpg';

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      image: Member1Image,
      name: 'Jean Mukeba',
      position: 'Directeur Général',
      facebook: 'https://facebook.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/'
    },
    {
      id: 2,
      image: Member2Image,
      name: 'Marie Lukusa',
      position: 'Directrice des Opérations',
      facebook: 'https://facebook.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/'
    },
    {
      id: 3,
      image: Member3Image,
      name: 'Patrick Kayembe',
      position: 'Ingénieur en Chef',
      facebook: 'https://facebook.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/'
    },
    {
      id: 4,
      image: Member4Image,
      name: 'Sophie Mbuyi',
      position: 'Architecte Principal',
      facebook: 'https://facebook.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/'
    }
  ];

  return (
    <Section id="team">
      <Container>
        <Heading center underline>
          Notre Équipe
        </Heading>
        <Text center maxWidth="700px" style={{ margin: '0 auto 30px' }}>
          Notre équipe de professionnels dévoués et expérimentés travaille ensemble pour offrir l'excellence à chaque projet.
        </Text>
        
        <TeamGrid>
          {teamMembers.map(member => (
            <TeamMember 
              key={member.id}
              image={member.image}
              name={member.name}
              position={member.position}
              facebook={member.facebook}
              twitter={member.twitter}
              instagram={member.instagram}
              linkedin={member.linkedin}
            />
          ))}
        </TeamGrid>
      </Container>
    </Section>
  );
};

export default Team;
