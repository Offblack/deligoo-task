import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  mask: url(${({ icon }) => icon});
  width: 25px;
  height: 25px;
  mask-size: 90%;
  mask-repeat: no-repeat;
  background-color: ${({ theme }) => theme.mainBlue};
  border: none;
  outline: none;
  transition: all 0.3s ease-in-out;
  background-position: center;

  &:hover {
    background-color: ${({ theme }) => theme.mainBlue};
    cursor: pointer;
  }

  ${({ logo }) =>
        logo &&
        css`
         display: block;
         background-image: url(${({ icon }) => icon});
         background-repeat: no-repeat;
         width: 195px;
         height: 35px;
         background-size: 100%;
         mask: none;
         background-color: transparent;
         margin-right: auto;

         &:hover {
         background-color: transparent;
         }
      `}
`;

export default ButtonIcon;
