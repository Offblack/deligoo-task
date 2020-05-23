import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Lato&display=swap&subset=latin-ext');

  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
   padding: 0;
   margin: 0;
   font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
