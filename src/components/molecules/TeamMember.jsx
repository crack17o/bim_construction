import React from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import IconContainer from '../atoms/IconContainer';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const TeamMemberWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberImage = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;
  
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

const MemberContent = styled.div`
  padding: 25px;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightGrey};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    transform: translateY(-3px);
  }
`;

const TeamMember = ({ image, name, position}) => {
  return (
    <TeamMemberWrapper>
      <MemberImage>
        <img src={image} alt={name} />
      </MemberImage>
      <MemberContent>
        <Heading $as="h3" mb="5px">
          {name}
        </Heading>
        <Text size="small" mb="15px" weight="500" color="primary">
          {position}
        </Text>
        {/* <SocialIcons>
          {facebook && (
            <SocialIcon href={facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
          )}
          {twitter && (
            <SocialIcon href={twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
          )}
          {instagram && (
            <SocialIcon href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
          )}
          {linkedin && (
            <SocialIcon href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
          )}
        </SocialIcons> */}
      </MemberContent>
    </TeamMemberWrapper>
  );
};

export default TeamMember;
