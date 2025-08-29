import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 40px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const MemberCard = styled(motion.div)`
  text-align: center;
  padding: 20px 10px;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-15px) scale(1.05);
  
    background: rgba(0, 191, 255, 0.05);
  }
`;

const MemberImage = styled(motion.img)`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 4px solid #eee;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 640px) {
    width: 100px;
    height: 100px;
  }
`;

const MemberName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #222;
`;

const MemberPosition = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-top: 5px;
`;

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      image: './img/dany.svg',
      name: 'Archi Daniel Mbusa',
      position: 'Directeur Gérant',
    },
    {
      id: 2,
      image: './img/dany.svg',
      name: 'Ir Kennedy Syatsukwa',
      position: 'Directeur Technique',
    },
    {
      id: 3,
      image: './img/dany.svg',
      name: 'Archi Elie Tuluenga',
      position: 'Directeur Administratif et Financier',
    },
    {
      id: 4,
      image: './img/dany.svg',
      name: 'Ir Philémon Muhindo',
      position: 'Chef de Service Génie Civil',
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
          {teamMembers.map((member, index) => (
            <MemberCard
              key={member.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <MemberImage
                src={member.image}
                alt={member.name}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <MemberName>{member.name}</MemberName>
              <MemberPosition>{member.position}</MemberPosition>
            </MemberCard>
          ))}
        </TeamGrid>
      </Container>
    </Section>
  );
};

export default Team;
