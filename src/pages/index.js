import React from 'react';
import { ThemeProvider } from 'styled-components';
import SEO from '../components/seo';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/MainTheme';
import HeaderMenu from '../components/organisms/HeaderMenu/HeaderMenu';

const IndexPage = () => (
    <>
        <SEO title="Site Task" />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <HeaderMenu />
        </ThemeProvider>
    </>
);

export default IndexPage;
