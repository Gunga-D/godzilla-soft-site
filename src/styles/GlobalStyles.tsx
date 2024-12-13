import {createGlobalStyle} from "styled-components";
import {theme} from "./ThemeStyles";

export const GlobalStyles = createGlobalStyle `
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:  ${theme.colors.black.default};
  }
  body {

  }
  
  section {
    background-color: ${theme.colors.black.default};
  } 
  header {
    background-color: ${theme.colors.black.default};
  }
`
