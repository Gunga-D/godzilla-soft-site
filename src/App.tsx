import React from 'react';
import styled from "styled-components";
import photo from "./assets/images/Leonardo_Kino_XL_faintly_visible_blurry_smoke_fog_everywhere_m01.png"
import {FlexWrapper} from "./components/FlexWrapper";
import {Main} from "./layout/Main/Main";
import {Footer} from "./layout/footer/Footer";
import {Layout} from "./layout/Layout/Layout";
function App() {
  return (
      <StyledMainPage>
          <FlexWrapper align='center' direction='column'>
              <Layout pageId="Каталог">
                <Main />
              </Layout>
          </FlexWrapper>
      </StyledMainPage>
  );
}

const StyledMainPage = styled.div `
  position: absolute;
  background-image: url(${photo}); 
  background-size: cover;
  background-position: top; 
  width: 100%;
  min-height: 100%;
`
export default App;
