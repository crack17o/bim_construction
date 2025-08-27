import React from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import IconContainer from '../atoms/IconContainer';

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.center ? 'center' : 'flex-start'};
  text-align: ${props => props.center ? 'center' : 'left'};
`;

const FeatureBox = ({ icon, title, description, center }) => {
  return (
    <FeatureWrapper center={center}>
      <IconContainer mb="20px">
        {icon}
      </IconContainer>
      <Heading $as="h3" mb="15px">
        {title}
      </Heading>
      <Text>
        {description}
      </Text>
    </FeatureWrapper>
  );
};

export default FeatureBox;
