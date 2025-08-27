import styled from 'styled-components';

const InputField = styled.div`
  margin-bottom: 20px;
  width: 100%;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid ${props => props.theme.colors.grey};
    border-radius: 4px;
    font-family: ${props => props.theme.fonts.main};
    font-size: 14px;
    transition: border-color 0.3s;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.darkGrey};
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 3px rgba(11, 37, 69, 0.1);
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
  
  .error-message {
    color: #e74c3c;
    font-size: 12px;
    margin-top: 5px;
  }
`;

export default InputField;
