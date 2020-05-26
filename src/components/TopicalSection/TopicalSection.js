import React from 'react';
import styled, { css } from 'styled-components';
import Header from '../Header/Header';
import Subheader from '../Subheader/Subheader';
import TopIcon1 from '../../assets/images/topical-icon-1.svg';
import TopIcon2 from '../../assets/images/topical-icon-2.svg';
import TopIcon3 from '../../assets/images/topical-icon-3.svg';

const topics = [
    {
        subheader: 'Dostarczaj jedzenie',
        header: 'bez zbędnych kosztów',
        benefits: [
            'Uruchom dostawy bez zatrudniania kurierów',
            'Zautomatyzuj wszystkie etapy dostawy zamówienia',
            'Optymalizuj pracę restauracji',
            'Nie płać wysokich prowizji',
        ],
        src: TopIcon1,
        alt: 'top-icon-1',
    },
    {
        subheader: 'Zwiększ zadowolenie',
        header: 'klientów',
        benefits: ['Dostarczaj ciepłe posiłki',
            'Informuj SMS-em o wszystkich etapach zamówienia',
            'Korzystaj z profesjonalnych i przeszkolonych kurierów',
            'Skracaj czas dostawy'
        ],
        src: TopIcon2,
        alt: 'top-icon-2',
        reverse: true,
    },
    {
        subheader: 'Stwórz stronę',
        header: 'do zamawiania online',
        benefits: ['Przyjmuj więcej zamówień bez odbierania telefonów',
            'Zaprezentuj swoje menu w internecie',
            'Uniezależnij się od aplikacji zewnętrznych',
            'Przyjmuj płatności online'
        ],
        src: TopIcon3,
        alt: 'top-icon-3',
        wider: true,
    },
]

const StyledWrapper = styled.div`
  width: calc(100% - 125px);
  height: auto;
  display: flex;
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

const StyledInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 90px;

    ${({ reverse }) =>
        reverse &&
        css`
         margin-left: 90px;
         order: 2;
      `}

    @media (max-width: 768px) {
        order: 0;
        margin: 0 10px 10px 10px;
    }
`;

const StyledSubheader = styled(Subheader)`
    margin: 0 0 15px 0;

    @media (max-width: 768px) {
        padding-left: 0;
        margin-bottom: 10px;
    }
`;

const StyledHeader = styled(Header)`
    margin: 0 0 60px 0;
    padding: 0;
    text-align: left;

    @media (max-width: 768px) {
        order: 0;
        margin-bottom: 20px;
        padding-left: 0;
    }
`;

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    text-align: left;
    list-style-type: none;
`

const StyledListElement = styled.li`
    margin-bottom: 25px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #394257;

    &::before{
        content: "•";
        width: 6px;
        height: 6px;
        color: ${({ theme }) => theme.mainBlue};
        margin-right: 14px;
        font-family: "Lato", sans-serif;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 15px;
    }
`;


const TopicalSection = () => (
    <>
        {topics.map(({ header, subheader, src, alt, benefits, reverse }) => (
            <StyledWrapper>
                <StyledInnerWrapper reverse={reverse}>
                    <StyledSubheader>{subheader}</StyledSubheader>
                    <StyledHeader basic>{header}</StyledHeader>
                    <StyledList>
                        {benefits.map((benefit) => (
                            <StyledListElement>
                                {benefit}
                            </StyledListElement>
                        ))}
                    </StyledList>
                </StyledInnerWrapper>
                <img src={src} alt={alt} />
            </StyledWrapper>
        ))}
    </>
);

export default TopicalSection;
