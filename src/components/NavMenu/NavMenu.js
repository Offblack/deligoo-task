import React from 'react';
import styled from 'styled-components';
import logoIcon from '../../assets/images/logo.svg'
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import NavItems from '../NavItems/NavItems';

const StyledWrapper = styled.div`
  width: calc(100% - 160px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 150px;
  animation: fadeIn 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    position: relative;
    width: 100%;

    &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: 0;
    left: 0;
    margin: auto;
    width: 95%;
    height: 50px;
    border-radius: 20px;
    background-color: rgb(240,249,254);
    background-color: linear-gradient(45deg, rgba(240,249,254,0) 0%, rgba(215,238,253,1) 100%);
  }
  }
`;


const HeaderMenu = () => (
  <StyledWrapper>
    <ButtonIcon as="a" icon={logoIcon} logo />
    <NavItems />
  </StyledWrapper>
);

export default HeaderMenu;
