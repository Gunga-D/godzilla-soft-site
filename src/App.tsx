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
import {GamePage} from "./layout/GamePage/GamePage";
import {Contacts} from "./layout/Contacts/Contacts";
import {PaymentError} from "./layout/PaymentPage/PaymentError";
import {PaymentSuccess} from "./layout/PaymentPage/PaymentSuccess";
import { RandomGamePage } from './layout/RandomGamePage/RandomGamePage';

function App() {
    return (
        <StyledBackground>
            <FlexWrapper align='center' direction='column'>
                <Layout pageId="">
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/games'>
                            <Route index element={<Catalog active='games'/>} />
                            <Route path=':value' element={<GamePage />}></Route>
                        </Route>
                        <Route path='/deposits'>
                            <Route index element={<Catalog active='deposits'/>} />
                            <Route path=':value' element={<GamePage />}></Route>
                        </Route>
                        <Route path='/subscriptions'>
                            <Route index element={<Catalog active='subscriptions'/>} />
                            <Route path=':value' element={<GamePage />}></Route>
                        </Route>
                        <Route path='/random' element={<RandomGamePage/>}/>
                        <Route path='/contacts' element={<Contacts/>} />
                        <Route path='/login' element={<LogIn/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                        <Route path='/payment_success' element={<PaymentSuccess/>}/>
                        <Route path='/payment_error' element={<PaymentError/>}/>
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
`;

export default App;
