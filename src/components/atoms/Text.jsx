import styled from 'styled-components';

const Text = styled.p`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.light ? props.theme.colors.white : props.theme.colors[props.color || 'darkGrey']};
  font-size: ${props => {
    switch(props.size) {
      case 'small': return '14px';
      case 'large': return '18px';
      default: return '16px';
    }
  }};
  line-height: 1.7;
  margin-bottom: ${props => props.mb || '16px'};
  font-weight: ${props => props.weight || '400'};
  text-align: ${props => props.center ? 'center' : 'left'};
  max-width: ${props => props.maxWidth || 'none'};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.size === 'large' ? '16px' : '14px'};
  }
`;

export default Text;
