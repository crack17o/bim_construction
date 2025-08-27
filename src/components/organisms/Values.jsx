import React from 'react';
import styled from 'styled-components';
import { FaGem, FaLightbulb, FaBalanceScale, FaLeaf } from 'react-icons/fa';
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
      title: 'Qualité',
      description: 'Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos projets, en utilisant des matériaux durables et des techniques éprouvées.'
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies et méthodes innovantes pour optimiser nos processus et offrir des solutions modernes à nos clients.'
    },
    {
      id: 3,
      icon: <FaBalanceScale />,
      title: 'Intégrité',
      description: 'L\'honnêteté et la transparence guident toutes nos interactions avec nos clients, partenaires et employés, garantissant une confiance mutuelle.'
    },
    {
      id: 4,
      icon: <FaLeaf />,
      title: 'Durabilité',
      description: 'Nous concevons et construisons avec une vision à long terme, en minimisant notre impact environnemental et en créant des infrastructures durables.'
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
