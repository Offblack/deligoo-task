import React from 'react';
import SEO from '../components/seo';
import HeroSlider from '../components/organisms/HeroSlider';
import GlobalStyle from '../theme/GlobalStyle';
import NewsSection from '../components/organisms/NewsSection';
import MainTemplate from '../components/templates/MainTemplate';

const IndexPage = () => (
  <>
    <SEO title="Site Task" />
    <GlobalStyle />
    <HeroSlider />
    <MainTemplate>
      <NewsSection />
    </MainTemplate>
  </>
);

export default IndexPage;
