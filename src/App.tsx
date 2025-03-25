import React from 'react';
import styled from "styled-components";
import photo from "./assets/images/Leonardo_Kino_XL_faintly_visible_blurry_smoke_fog_everywhere_m01.png"
import {Layout} from "./layout/Layout/Layout";


function App() {
    return (
        <StyledBackground>
            {/*<FlexWrapper align='center' direction='column'>*/}
                <Layout pageId="">
                    {/*<Routes>*/}
                    {/*    <Route path='/' element={<Main />} />*/}
                    {/*    <Route path='/games'>*/}
                    {/*        <Route index element={<Catalog active='games'/>} />*/}
                    {/*        <Route path=':value' element={<GamePage />}></Route>*/}
                    {/*    </Route>*/}
                    {/*    <Route path='/deposits'>*/}
                    {/*        <Route index element={<Catalog active='deposits'/>} />*/}
                    {/*        <Route path=':value' element={<GamePage />}></Route>*/}
                    {/*    </Route>*/}
                    {/*    <Route path='/subscriptions'>*/}
                    {/*        <Route index element={<Catalog active='subscriptions'/>} />*/}
                    {/*        <Route path=':value' element={<GamePage />}></Route>*/}
                    {/*    </Route>*/}
                    {/*    <Route path='/contacts' element={<Contacts/>} />*/}
                    {/*    <Route path='/login' element={<LogIn/>}/>*/}
                    {/*    <Route path='steam_deposit' element={<SteamDepositsPage/>}/>*/}
                    {/*    <Route path='/random' element={<RandomGamePage/>}/>*/}


                    {/*    <Route path='/redirect/payment_success' element={<PaymentSuccess/>}/>*/}
                    {/*    <Route path='/redirect/steam_payment_success' element={<PaymentSuccess description='Деньги зачислятся на баланс Steam в течение 5-10 минут'/>}/>*/}
                    {/*    <Route path='/redirect/payment_error' element={<PaymentError/>}/>*/}
                    {/*    <Route path='/redirect/not_found' element={<NotFoundPage/>}/>*/}
                    {/*</Routes>*/}
                </Layout>
            {/*</FlexWrapper>*/}
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
