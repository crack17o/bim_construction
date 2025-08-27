import React from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

const CardWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectCard = ({ image, title, category, description }) => {
  return (
    <CardWrapper>
      <CardImage>
        <img src={image} alt={title} />
      </CardImage>
      <CardContent>
        <Text size="small" color="primary" mb="5px" weight="500">
          {category}
        </Text>
        <Heading $as="h3" mb="15px">
          {title}
        </Heading>
        <Text mb="0">
          {description}
        </Text>
      </CardContent>
    </CardWrapper>
  );
};

export default ProjectCard;
