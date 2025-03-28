import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/ThemeStyles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <ThemeProvider theme={theme}>
              <App />
      </ThemeProvider>
);
