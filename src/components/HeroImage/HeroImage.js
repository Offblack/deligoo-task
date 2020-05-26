import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Subheader from '../Subheader/Subheader';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Paragraph from '../Header/Header';
import HeroIcon from '../../assets/images/hero_icon.svg';

const StyledWrapper = styled.div`
  width: calc(100% - 80px);
  height: 750px;
  border-radius: 20px;
  margin: 0 0 160px;
  background-color: rgb(240,249,254);
  background-color: linear-gradient(45deg, rgba(240,249,254,0) 0%, rgba(215,238,253,1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: -130px;
    margin: auto;
    padding: 0;
    max-width: 1550px;
    height: 810px;
    background: url(${HeroIcon}) no-repeat center;
    background-size: 95%;
}

@media (max-width: 768px) {
  width: 95%;
  height: auto;
  padding: 35px 0;
  margin: 20px 0;

  &::before {
    content: '';
    background: none;
    width: 0;
    height: 0;
  }
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.mainBlue};
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 15px;
  }
`;

const StyledInnerWrapper = styled.div`
  z-index: 1;
`;


const HeroImage = () => (
  <StyledWrapper>
    <Header>Dostarczaj jedzenie ze swojej restauracji i zyskaj nowych klientów</Header>
    <Subheader basic>Już dziś uruchom własne dostawy</Subheader>
    <StyledInnerWrapper>
      <Input
        name="email"
        placeholder="Twój adres e-mail"
      />
      <Input
        name="phone"
        placeholder="Twój numer telefonu"
      />
      <Button basic>Poznaj szczegóły</Button>
    </StyledInnerWrapper>
    <StyledParagraph>Wypełnij co najmniej jedno pole</StyledParagraph>
  </StyledWrapper>
);

export default HeroImage;
