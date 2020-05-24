import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  
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

  /* Animations */
  
  @keyframes slideIn {
    0% {
      height: 0px;
    }

    100% {
      height: 30px;
    }
}

@keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export default GlobalStyle;
