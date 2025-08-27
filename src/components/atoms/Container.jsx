import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.noPadding ? '0' : '0 20px'};
  position: relative;
`;

export default Container;
