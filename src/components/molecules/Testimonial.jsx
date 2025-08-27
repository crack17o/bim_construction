import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';
import Text from '../atoms/Text';

const TestimonialWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${props => props.theme.colors.grey};
  opacity: 0.3;
  font-size: 36px;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ClientImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ClientDetails = styled.div``;

const Testimonial = ({ quote, name, company, image }) => {
  return (
    <TestimonialWrapper>
      <QuoteIcon>
        <FaQuoteLeft />
      </QuoteIcon>
      <Text>"{quote}"</Text>
      <ClientInfo>
        {image && (
          <ClientImage>
            <img src={image} alt={name} />
          </ClientImage>
        )}
        <ClientDetails>
          <Text weight="600" mb="0">
            {name}
          </Text>
          {company && (
            <Text size="small" color="primary" mb="0">
              {company}
            </Text>
          )}
        </ClientDetails>
      </ClientInfo>
    </TestimonialWrapper>
  );
};

export default Testimonial;
