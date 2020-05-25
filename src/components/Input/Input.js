import styled from 'styled-components';

const Input = styled.input`
  background-color: #fff;
  width: 380px;
  line-height: 24px;
  padding: 12px;
  border-radius: 6px;
  border: 2px solid #BDD8EA;
  outline: none;
  font-size: 16px;
  color: #1F273A;
  margin-top: 70px;
  margin-right: 20px;
  font-family: 'Montserrat';
  font-weight: 500;

  &::placeholder {
    font-size: 16px;
    color: #394257;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    margin-right: 0;
    margin-top: 20px;
  }
`;

export default Input;
