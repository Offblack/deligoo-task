import React from 'react';
import styled from 'styled-components';
import Logo1 from '../../assets/images/company-logo-1.png';
import Logo2 from '../../assets/images/company-logo-2.png';
import Logo3 from '../../assets/images/company-logo-3.png';
import Logo4 from '../../assets/images/company-logo-4.png';
import Logo5 from '../../assets/images/company-logo-5.png';
import Logo6 from '../../assets/images/company-logo-6.png';

const logos = [
    { src: Logo1, alt: 'logo-1' },
    { src: Logo2, alt: 'logo-2' },
    { src: Logo3, alt: 'logo-3' },
    { src: Logo4, alt: 'logo-4' },
    { src: Logo5, alt: 'logo-5' },
    { src: Logo6, alt: 'logo-6' },
]

const StyledWrapper = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 50px;
  }
`;

const StyledSubheader = styled.h3`
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #768099;
    margin-bottom: 40px;

    @media (max-width: 768px) {
    margin: 25px 0;
  }
`;

const StyledInnerWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 110px;

  @media (max-width: 768px) {
    grid-auto-flow: row;
    grid-gap: 40px;
    justify-items: center;
  }
`;

const CompanyList = () => (
    <StyledWrapper>
        <StyledSubheader>ZAUFALI NAM</StyledSubheader>
        <StyledInnerWrapper>
            {logos.map(({ src, alt }) => (
                <img src={src} alt={alt} />
            ))}
        </StyledInnerWrapper>
    </StyledWrapper>
);

export default CompanyList;
