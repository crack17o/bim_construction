import React from 'react';
import styled from 'styled-components';
import { FaGem, FaBalanceScale, FaLightbulb, FaCheckCircle, FaHandsHelping } from 'react-icons/fa';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Card from '../atoms/Card';
import IconContainer from '../atoms/IconContainer';

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

const ValueCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Values = () => {
  const values = [
    {
      id: 1,
      icon: <FaGem />,
      title: 'Excellence',
      description: 'Fournir un travail de haute qualité dans chaque projet.'
    },
    {
      id: 2,
      icon: <FaBalanceScale />,
      title: 'Intégrité',
      description: 'Agir avec transparence et professionnalisme.'
    },
    {
      id: 3,
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Utiliser des méthodes modernes comme le BIM pour optimiser chaque chantier.'
    },
    {
      id: 4,
      icon: <FaCheckCircle />,
      title: 'Engagement',
      description: 'Respecter les délais, les budgets et les attentes des clients.'
    },
    {
      id: 5,
      icon: <FaHandsHelping />,
      title: 'Responsabilité sociale',
      description: 'Contribuer positivement au développement des communautés locales.'
    }
  ];

  return (
    <Section id="values">
      <Container>
        <Heading center underline>
          Nos Valeurs
        </Heading>
        <Text center maxWidth="700px" style={{ margin: '0 auto 30px' }}>
          Ces valeurs fondamentales guident chaque aspect de notre travail et représentent notre engagement envers nos clients et la communauté.
        </Text>
        
        <ValuesGrid>
          {values.map(value => (
            <ValueCard key={value.id}>
              <IconContainer>
                {value.icon}
              </IconContainer>
              <Heading $as="h3" mb="15px">
                {value.title}
              </Heading>
              <Text center>
                {value.description}
              </Text>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Container>
    </Section>
  );
};

export default Values;
