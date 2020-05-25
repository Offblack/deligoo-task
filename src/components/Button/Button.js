import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, basic }) => basic ? theme.mainBlue : '#fff'};
  color: ${({ theme, basic }) => basic ? '#fff' : theme.mainBlue};
  padding: 17px 36px;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 24px 40px 0px rgba(86,209,238,0.15);
  margin: 0;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: #6CDBF5;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export default Button;
