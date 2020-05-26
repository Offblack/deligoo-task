import React from 'react';
import { ThemeProvider } from 'styled-components';
import SEO from '../components/seo';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/MainTheme';
import NavMenu from '../components/NavMenu/NavMenu';
import HeroImage from '../components/HeroImage/HeroImage';
import MainTemplate from '../components/MainTemplate/MainTemplate';
import CompanyList from '../components/CompanyList/CompanyList';
import TopicalSection from '../components/TopicalSection/TopicalSection';
import CaseStudies from '../components/CaseStudies/CaseStudies';
import ContactSection from '../components/ContactSection/ContactSection';

const IndexPage = () => (
    <>
        <SEO title="DeliGoo" />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <MainTemplate>
                <NavMenu header />
                <HeroImage />
                <CompanyList />
                <TopicalSection />
                <CaseStudies />
                <ContactSection />
                <NavMenu />
            </MainTemplate>
        </ThemeProvider>
    </>
);

export default IndexPage;
