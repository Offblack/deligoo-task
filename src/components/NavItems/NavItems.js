import React from 'react';
import styled, { css } from 'styled-components';
import phoneIcon from '../../assets/images/phone-icon.svg';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 20px;
  margin-right: 40px;
  @media (max-width: 768px) {
    margin-right: 0;
  }

  ${({ bold }) =>
    bold &&
    css`
         font-weight: 700;
      `}
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;


const NavItems = () => (
  <StyledWrapper>
    <StyledParagraph>Zainteresowany?</StyledParagraph>
    <StyledButtonIcon as="a" icon={phoneIcon} />
    <StyledParagraph bold>791 462 067</StyledParagraph>
  </StyledWrapper>
);

export default NavItems;
