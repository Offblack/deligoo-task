import React from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import background from '../../../images/background_1.png';
import Button from '../../atoms/Button';
import SliderHeader from '../../atoms/SliderHeader';
import bigCard from '../../../images/business_cards_big.png';
import smallCard from '../../../images/business_cards_small.png';
import { Link } from 'gatsby';

const StyledWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const OneSlide = styled.div`
  background: url(${background}) no-repeat center;
  background-size: cover;
  height: 500px;
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  max-width: 900px;

  ${props =>
    props.small &&
    css`
      flex-direction: column;
      text-align: center;
      padding-top: 45px;
      padding-bottom: 48px;
    `}
`;

const StyledHeader = styled.span`
  font-weight: 700;
`;

const StyledParagraph = styled.p`
  font-size: 24px;

  ${props =>
    props.small &&
    css`
      font-size: 20px;
      padding: 0 30px;
    `}
`;

const RightContainer = styled.div`
  margin-left: 112px;

  @media (max-width: 768px) and (min-width: 540px) {
    margin-left: 56px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
`;

const HeroSlider = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 540px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 541px)' });
  return (
    <section>
      <StyledWrapper>
        <Slider speed={500} slidesToShow={1} slidesToScroll={1} infinite={true}>
          <OneSlide>
            {isMobile && (
              <SlideContainer small>
                <SliderHeader small>
                  Ciekawy <StyledHeader>slogan reklamowy</StyledHeader>
                </SliderHeader>
                <img src={smallCard} alt="business-card"></img>
                <StyledParagraph small>
                  Otwieramy się na niskie nakłady! Niższe ceny małych zamówień!
                </StyledParagraph>
                <Button as={StyledLink} to="/">
                  Więcej informacji
                </Button>
              </SlideContainer>
            )}
            {isDesktop && (
              <SlideContainer>
                <img src={bigCard} alt="business-card"></img>
                <RightContainer>
                  <SliderHeader>
                    Ciekawy <StyledHeader>slogan reklamowy</StyledHeader>
                  </SliderHeader>
                  <StyledParagraph>
                    Otwieramy się na niskie nakłady! Niższe ceny małych
                    zamówień!
                  </StyledParagraph>
                  <Button as={StyledLink} to="/">
                    Więcej informacji
                  </Button>
                </RightContainer>
              </SlideContainer>
            )}
          </OneSlide>
        </Slider>
      </StyledWrapper>
    </section>
  );
};

export default HeroSlider;
