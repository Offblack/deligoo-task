import React from 'react';
import styled, { css } from 'styled-components';
import Header from '../Header/Header';
import Subheader from '../Subheader/Subheader';
import Paragraph from '../Paragraph/Paragraph';
import CaseStudy1 from '../../assets/images/case-study-1.png';
import arrowIcon1 from '../../assets/images/arrow-icon-1.svg';
import arrowIcon2 from '../../assets/images/arrow-icon-2.svg';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

const cases = [
    {
        subheader: 'Jak usługi logistyczne DeliGoo wpływają na zwiększenie sprzedaży w gastronomii?',
        date: '14 Marzec 2020',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac cursus aliquam quam tincidunt. Posuere eu in nam aliquam felis. Turpis a massa aliquet.',
        src: CaseStudy1,
        alt: 'case-study-1',
    },
]

const StyledWrapper = styled.div`
  width: calc(100% - 125px);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    margin-bottom: 50px;

    img {
        width: 100%;
        height: auto;
    }
  }
`;

const StyledSliderWrapper = styled.div`
  width: calc(100% - 115px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 60px;
    max-width: 675px;
    text-align: left;

    @media (max-width: 768px) {
        margin: 0 10px 10px 10px;
    }
`;

const StyledSubheader = styled(Subheader)`
    margin: 0 0 20px 0;

    @media (max-width: 768px) {
        padding-left: 0;
        margin-bottom: 10px;
    }
`;

const StyledHeader = styled(Header)`
    margin: 0 0 135px 115px;
    padding: 0;
    align-self: flex-start;

    @media (max-width: 768px) {
        order: 0;
        margin-bottom: 20px;
        padding-left: 0;
    }
`;

const StyledLink = styled(Paragraph)`
    color: ${({ theme }) => theme.mainBlue};
    font-size: 12px;
    margin-top: 30px;
    text-decoration: none;
    font-weight: 600;
    line-height: 16px;
    transition: all .3s ease-in-out;
    background: url(${arrowIcon2}) no-repeat center right;
    padding-right: 20px;

    &:hover {
        padding-right: 25px;
    }
`;


const StyledParagraph = styled(Paragraph)`
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #768099;
    margin-bottom: 20px;

    @media (max-width: 768px) {
    margin: 25px 0;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin: 0;
  position: absolute;
  background-color: ${({ theme }) => theme.mainGrey};
  width: 12px;
  height: 12px;

    ${({ left }) =>
        left &&
        css`
         left: 110px;
         transform: rotate(-180deg);
        `}

    ${({ right }) =>
        right &&
        css`
         right: 110px;
        `}
`;


const TopicalSection = () => (
    <StyledWrapper>
        <StyledHeader>Case Study</StyledHeader>
        {cases.map(({ subheader, date, content, src, alt }) => (
            <StyledSliderWrapper>
                <StyledButtonIcon icon={arrowIcon1} left />
                <img src={src} alt={alt} />
                <StyledInnerWrapper>
                    <StyledParagraph>{date}</StyledParagraph>
                    <StyledSubheader>{subheader}</StyledSubheader>
                    <Paragraph>{content}</Paragraph>
                    <StyledLink as="a" href="#">Czytaj Case Study</StyledLink>
                </StyledInnerWrapper>
                <StyledButtonIcon icon={arrowIcon1} right />
            </StyledSliderWrapper>
        ))}
    </StyledWrapper>
);

export default TopicalSection;
