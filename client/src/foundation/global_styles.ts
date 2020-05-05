import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app {
    height: 100%;
    width: 100%;
  }

  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle;
