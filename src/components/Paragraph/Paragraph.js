import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.mainGrey};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default Paragraph;
