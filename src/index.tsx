import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GlobalStyles} from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/ThemeStyles";
import { HashRouter} from "react-router-dom";
import {ScrollToTop} from "./components/scrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <ThemeProvider theme={theme}>
          <HashRouter>
              <ScrollToTop />
              <App />
              <GlobalStyles />
          </HashRouter>
      </ThemeProvider>
);
