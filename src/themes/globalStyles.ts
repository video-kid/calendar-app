import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
:root {
  --default-font: 'Source Sans Pro', sans-serif;
}
*, *:before, *:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  html {
    font-size: 10px;
  }
  body {
    font-family: var(--default-font);
    margin: 0;    
    font-size: 1.4rem;
  }
`;

export default GlobalStyle;
