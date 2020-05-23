import styled, { css } from 'styled-components';

const SliderHeader = styled.h1`
  font-size: 49px;
  color: rgba(0, 158, 226, 1);
  margin: 0;
  padding: 0;
  font-weight: 400;

  ${props =>
    props.small &&
    css`
      font-size: 34px;
      padding: 0 30px;
    `}
`;

export default SliderHeader;
