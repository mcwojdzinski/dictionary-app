import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-font: 'Inconsolata', monospace; /* Default font */
  }

 
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: var(--main-font);
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
