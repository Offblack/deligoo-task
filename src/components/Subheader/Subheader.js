import styled from 'styled-components';

const Paragraph = styled.h2`
  margin-top: 40px;
  padding: 0;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme, basic }) => basic ? theme.mainBlue : '#1F273A'};
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 10px;
    margin-top: 25px;
  }
`;

export default Paragraph;
