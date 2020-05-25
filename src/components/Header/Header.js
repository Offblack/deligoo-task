import styled from 'styled-components';

const Paragraph = styled.h1`
  margin-top: 80px;
  margin-bottom: 0px;
  padding: 0;
  max-width: 850px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 40px;
  color: ${({ theme, basic }) => basic ? theme.mainBlue : '#1F273A'};
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: 0;
    font-size: 18px;
    padding: 0 15px;
  }
`;

export default Paragraph;
