import styled from 'styled-components';

const Button = styled.button`
  background-color: rgba(241, 0, 123, 1);
  padding: 20px 32px 17px;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.05);
  margin: 0;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: rgba(256, 15, 138, 1);
  }
`;

export default Button;
