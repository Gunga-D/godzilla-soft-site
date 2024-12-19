import React from 'react';
import styled from "styled-components";
import photo from "./assets/images/Leonardo_Kino_XL_faintly_visible_blurry_smoke_fog_everywhere_m01.png"
import {FlexWrapper} from "./components/FlexWrapper";
import {Main} from "./layout/Main/Main";
import {Layout} from "./layout/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import {Catalog} from "./layout/Catalog/Catalog";
import {NotFoundPage} from "./layout/NotFoundPage/NotFoundPage";
import {LogIn} from "./layout/LogIn/Login";
function App() {
  return (
      <StyledBackground>
          <FlexWrapper align='center' direction='column'>
              <Layout pageId="">
                      <Routes>
                          <Route path='/'>
                              <Route
                                  path=''
                                  element={<Main />}
                                  />
                              <Route
                                  path='*'
                                  element={<NotFoundPage/>}/>
                          </Route>
                          <Route path='/catalog'>
                              <Route
                                  path=''
                                  element={<Catalog />}
                              />


                              <Route path='?filter=subscriptions'
                                     element={<Catalog path='subscriptions'/>}
                              />
                              <Route path='invoice'
                                     element={<Catalog path='invoice'/>}
                              />

                              <Route path='games'
                                     element={<Catalog path='games'/>}
                              >
                                  <Route path='id' element={<Catalog path='gamesid'/>} />
                              </Route>
                          </Route>
                          {/*Добавить тут проверку на авторизацию*/}
                          <Route path='/register' />
                          <Route path='/login' element={<LogIn/>}/>
                      </Routes>
              </Layout>
          </FlexWrapper>
      </StyledBackground>
  );
}

const StyledBackground = styled.div `
  position: absolute;
  background-image: url(${photo});
  background-size: cover;
  background-position: top;
  width: 100%;
  min-height: 100%;
  
`
export default App;
