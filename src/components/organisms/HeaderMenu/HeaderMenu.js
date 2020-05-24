import React from 'react';
import styled from 'styled-components';
import logoIcon from '../../../assets/images/logo.svg'
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import NavItems from '../../molecules/NavItems/NavItems';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 150px;
  animation: fadeIn 0.5s ease-in-out;
`;


const HeaderMenu = () => (
  <StyledWrapper>
    <ButtonIcon as="a" icon={logoIcon} logo />
    <NavItems />
  </StyledWrapper>
);

export default HeaderMenu;
