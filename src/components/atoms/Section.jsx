import styled from 'styled-components';

const Section = styled.section`
  padding: ${props => props.padding || '80px 0'};
  background-color: ${props => props.theme.colors[props.bg || 'white']};
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 60px 0;
  }
`;

export default Section;
