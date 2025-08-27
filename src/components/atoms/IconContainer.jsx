import styled from 'styled-components';

const IconContainer = styled.div`
  width: ${props => props.size || '60px'};
  height: ${props => props.size || '60px'};
  border-radius: ${props => props.round ? '50%' : '8px'};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bg ? props.theme.colors[props.bg] : props.theme.colors.primary};
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  margin-bottom: ${props => props.mb || '20px'};
  font-size: ${props => props.iconSize || '24px'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: ${props => props.noHover ? 'none' : 'translateY(-5px)'};
  }
`;

export default IconContainer;
