import styled from 'styled-components';

// Basic button component with variants
const Button = styled.button`
  padding: ${props => props.small ? '8px 16px' : '12px 24px'};
  background-color: ${props => props.theme.colors[props.variant || 'primary']};
  color: ${props => props.variant === 'white' ? props.theme.colors.primary : props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors[props.variant || 'primary']};
  border-radius: 4px;
  font-weight: 600;
  font-size: ${props => props.small ? '14px' : '16px'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: transparent;
    color: ${props => props.theme.colors[props.variant || 'primary']};
  }

  ${props => props.outline && `
    background-color: transparent;
    color: ${props.theme.colors[props.variant || 'primary']};
    
    &:hover {
      background-color: ${props.theme.colors[props.variant || 'primary']};
      color: ${props.variant === 'white' ? props.theme.colors.primary : props.theme.colors.white};
    }
  `}
`;

export default Button;
