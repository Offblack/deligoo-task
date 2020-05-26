import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Subheader from '../Subheader/Subheader';
import Input from '../Input/Input';
import Button from '../Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  height: 420px;
  background-color: ${({ theme }) => theme.mainBlue};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
        height: auto;
        padding-bottom: 25px;
   }
`;

const StyledInnerWrapper = styled.div`
  z-index: 1;
`;

const StyledHeader = styled(Header)`
    color: #fff;
    max-width: 100%;

   @media (max-width: 768px) {
        margin-top: 20px;
   }
`;

const StyledSubheader = styled(Subheader)`
    font-size: 20px;
    font-weight: 700;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 12px;
        font-weight: 600;
        padding: 0 10px;
   }
`;

const StyledInput = styled(Input)`
    background-color: #3EB4D0;
    color: #fff;
    border: none;
    line-height: 24px;
    padding: 14px;

    &::placeholder {
        color: #fff;
        line-height: 24px;
    }
`;

const ContactSection = () => (
    <StyledWrapper>
        <StyledHeader>DeliGoo ułatwia restauracjom dostawy jedzenia</StyledHeader>
        <StyledSubheader>Zacznij dostarczać posiłki do klientów już dziś. A jeśli już to robisz, zobacz jak zmniejszyć koszty dostaw.</StyledSubheader>
        <StyledInnerWrapper>
            <StyledInput
                name="email"
                placeholder="Twój adres e-mail"
            />
            <Button>Dowiedz się więcej</Button>
        </StyledInnerWrapper>
    </StyledWrapper>
);

export default ContactSection;
