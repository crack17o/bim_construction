import styled from 'styled-components';

// Heading component with variants for h1, h2, h3
const Heading = styled.h1`
  font-family: 'Libre Franklin', sans-serif;
  color: ${props => props.light ? props.theme.colors.white : props.theme.colors[props.color || 'primary']};
  margin-bottom: ${props => props.mb || '20px'};
  position: relative;
  font-weight: ${props => props.weight || '700'};
  font-size: ${props => {
    switch (props.$as) {
      case 'h1': return 'clamp(32px, 5vw, 48px)';
      case 'h2': return 'clamp(24px, 4vw, 36px)';
      case 'h3': return 'clamp(20px, 3vw, 24px)';
      case 'h4': return 'clamp(18px, 2vw, 20px)';
      default: return 'clamp(24px, 4vw, 36px)';
    }
  }};
  text-align: ${props => props.center ? 'center' : 'left'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  ${props => props.underline && `
    &::after {
      content: '';
      position: absolute;
      width: ${props.center ? '80px' : '60px'};
      height: 4px;
      background-color: ${props.theme.colors.primary};
      left: ${props.center ? '50%' : '0'};
      transform: ${props.center ? 'translateX(-50%)' : 'none'};
      bottom: -10px;
      border-radius: 2px;
    }
  `}
`;

export default Heading;
