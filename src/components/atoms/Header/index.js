import styled from 'styled-components';

const Header = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin: 50px auto 42px;
  padding: 0;

  ::after {
    content: '';
    display: block;
    width: 37px;
    height: 2px;
    margin: 18px auto 0px;
    /* Background gradients */
    background: rgb(241, 0, 125);
    background: linear-gradient(
      90deg,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
  }
`;

export default Header;
