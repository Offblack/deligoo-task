import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  background-image: rgba(255, 255, 255, 0);
  border-radius: 6px;
  cursor: pointer;

  ::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 6px;
    background: rgb(241, 0, 125);
    background-image: linear-gradient(
      45deg,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);
    z-index: -1;
    transition: opacity 0.4s ease-in;
    opacity: 0;
  }

  :hover::before {
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 236px;
  max-height: 315px;
  margin: 2px;
  background-color: #fafafa;
  border-radius: 5px;
`;

const StyledParagraph = styled.p`
  padding-bottom: 45px;
  font-size: 18px;
`;

const StyledImage = styled.img`
  padding: 54px 20px 0;
`;

const NewsItem = ({ src, title }) => (
  <StyledBackground>
    <StyledWrapper>
      <StyledImage src={src} alt={title} />
      <StyledParagraph>{title}</StyledParagraph>
    </StyledWrapper>
  </StyledBackground>
);

NewsItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsItem;
