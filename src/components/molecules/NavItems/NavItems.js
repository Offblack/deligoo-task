import React from 'react';
import styled, { css } from 'styled-components';
import phoneIcon from '../../../assets/images/phone-icon.svg';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 20px;
  margin-right: 40px;

  ${({ bold }) =>
    bold &&
    css`
         font-weight: 700;
      `}
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin-right: 30px;
`;


const NavItems = () => (
  <StyledWrapper>
    <StyledParagraph>Zainteresowany?</StyledParagraph>
    <StyledButtonIcon as="a" icon={phoneIcon} />
    <StyledParagraph bold>791 462 067</StyledParagraph>
  </StyledWrapper>
);

export default NavItems;
