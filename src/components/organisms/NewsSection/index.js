import React from 'react';
import styled from 'styled-components';
import NewsItem from '../../molecules/NewsItem';
import businessCard from '../../../images/business_card.png';
import leaflet from '../../../images/leaflet.png';
import poster from '../../../images/poster.png';
import calendar from '../../../images/calendar.png';
import folder from '../../../images/folder.png';
import stickers from '../../../images/stickers.png';
import banner from '../../../images/banner.png';
import mesh from '../../../images/mesh.png';
import Header from '../../atoms/Header';

const StyledWrapper = styled.div`
  margin: 0px auto 100px;
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-gap: 46px;

  @media (max-width: 1140px) and (min-width: 540px) {
    grid-template-columns: repeat(2, 240px);
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 240px);
    grid-gap: 16px;
  }
`;

const gridItems = [
  { src: businessCard, title: 'Wizytówki' },
  { src: leaflet, title: 'Ulotki' },
  { src: poster, title: 'Plakaty' },
  { src: calendar, title: 'Kalendarze' },
  { src: folder, title: 'Teczki' },
  { src: stickers, title: 'Naklejki' },
  { src: banner, title: 'Banner' },
  { src: mesh, title: 'Siatka mesh' },
];

const NewsSection = () => (
  <section>
    <header>
      <Header>Nowości</Header>
    </header>
    <StyledWrapper>
      {gridItems.map(item => (
        <NewsItem {...item} />
      ))}
    </StyledWrapper>
  </section>
);

export default NewsSection;
