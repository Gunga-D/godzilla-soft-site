"use client"
import styled from "styled-components";

import { Container } from "../../styles/Container";
import { steamApi } from "../../common/api/steam/api";
import { useEffect, useState } from "react";

export const SteamDepositsPage = () => {
    const [steamLogin, setSteamLogin] = useState<string>("");
    const [steamAmount, setSteamAmount] = useState<number>(500);
    const [price, setPrice] = useState<number>(0);
    const [err, setErr] = useState<string|null>(null);

    const calc = async () => {
      try {
          const resp = await steamApi.calc({
            amount: steamAmount,
          });
          setPrice(resp.data.price)
          setErr(null)
      } catch (err: any) {
          setErr(err.response.data.message)
          return;
      }
    };
    useEffect(() => {
      calc()
    }, [steamAmount])

    const createInvoice = async () => {
      try {
        const resp = await steamApi.createInvoice({
          steam_login: steamLogin,
          amount: steamAmount,
        });
        window.open(resp.data.payment_link, "_self");
        setErr(null)
      } catch (err: any) {
        setErr(err.response.data.message)
        return;
      }
    };

    return (
        <Container>
            <StyledH1>Пополнение баланса Steam</StyledH1>

            <SteamDepositsPageStyled>

                <LeftColumn>
                    <StyledDescription>Выгодное предложение</StyledDescription>
                    <StyledText>Аккаунты РФ и стран СНГ. Деньги поступят на аккаунт в течение 15 минут. В редких случаях — до 2 часов.</StyledText>

                    <StyledSection>
                        <StyledInputContainer>
                          <StyledInput type="text" placeholder="Введите логин Steam" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                            setSteamLogin(e.currentTarget.value)
                          }} style={{borderColor: err !== null?"red":"#a6a6a6"}}/>
                          <StyledQuestion href="https://store.steampowered.com/account/">?</StyledQuestion>
                        </StyledInputContainer>
                    </StyledSection>
                    <StyledSection>
                        <StyledLabel>Сумма пополнения, в рублях</StyledLabel>
                        <StyledInputContainer>
                          <StyledInput type="number" placeholder="500 ₽" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                            setSteamAmount(Number(e.currentTarget.value))
                          }} style={{borderColor: err !== null?"red":"#a6a6a6"}}/>
                          <StyledSmallText>От 30 ₽ до 30 000 ₽</StyledSmallText>
                        </StyledInputContainer>
                    </StyledSection>
                    <StyledSection>
                      <StyledErr>{err}</StyledErr>
                    </StyledSection>
                </LeftColumn>
                <RightColumn>
                    <StyledSection>
                        <StyledLabel>К оплате</StyledLabel>
                        <StyledPaymentDetails>
                            <div>Сумма пополнения: {steamAmount} ₽</div>
                            <div>Комиссия сервиса: {price-steamAmount} ₽</div>
                            <div>Итого: {price} ₽</div>
                        </StyledPaymentDetails>
                    </StyledSection>
                    <StyledSubmitButton onClick={createInvoice}>Оплатить {price} ₽</StyledSubmitButton>
                    <StyledFooter>
                        Нажимая "Оплатить", вы принимаете Правила пользования сайтом и Политику конфиденциальности.
                    </StyledFooter>
                </RightColumn>
            </SteamDepositsPageStyled>
        </Container>
    );
};

const SteamDepositsPageStyled = styled.div`
  display: flex;
  justify-content: space-between;
  
  color: #ffffff;
  padding: 20px;
`;

const LeftColumn = styled.div`
  width: 55%;
  text-align: left;
`;

const RightColumn = styled.div`
  width: 45%;
  margin-top: 0;
  padding-left: 60px;
  text-align: left;
`;

const StyledH1 = styled.h1`
  font-size: 55px;
text-align: left;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-top: 200px;


  color: #FF333B;
`;

const StyledDescription = styled.p`
  font-size: 30px;
  margin: 10px 0;
`;

const StyledText = styled.div`
  font-size: 17px;
  padding-bottom: 10px;
`;

const StyledSubtitle = styled.div`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const StyledSection = styled.div`
  margin: 20px 0;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  display: block;
  
`;

const StyledInputContainer = styled.div`
  position: relative;
  width: 80%;
`

const StyledQuestion = styled.a`
  position: absolute;
  right: 15px;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #FFFFFF;
  opacity: 0.5;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
  border-radius: 50%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2);
  line-height: 30px;
  width: 30px;
  height: 30px;
`

const StyledInput = styled.input`
  &&::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0; 
  }
  width: 100%;
  &::placeholder {
    color: #FFFFFF;
    opacity: 0.5;
  }
  height: 56px;
  background: rgba(44, 43, 43, 0.9);
  backdrop-filter: blur(3px);
  border: 2px solid #a6a6a6;
  border-radius: 5px;
  outline: none;
  color: #FFFFFF;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:focus {
    border-color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.2);
  }

`;


const StyledPaymentDetails = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 10px 0;

  div {
    &::placeholder {
      color: #FFFFFF;
      opacity: 0.5;
    }

    width: 450px;
    height: 56px;
    background: rgba(44, 43, 43, 0.9);
    backdrop-filter: blur(3px);
    border: 2px solid #a6a6a6;
    border-radius: 5px;
    outline: none;
    color: rgba(255, 255, 255, 0.84);
    padding: 10px;
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 16px;
    display: flex;
    align-items: center;
    line-height: 150%;
    transition: border-color 0.3s ease, background-color 0.3s ease;

    &:focus {
      border-color: #FFFFFF;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const StyledSubmitButton = styled.button`
  padding: 20px;
  background-color: #FF333B;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  font-weight: 900;
  font-size: 21px;
  &:hover {
    background-color: #ff4757;
  }
`;

const StyledFooter = styled.div`
  font-size: 12px;
  margin-top: 20px;
`;


const StyledSmallText = styled.p `
  font-size: 13px;
`

const StyledErr = styled.p`
  font-size: 13px;
  color: red;
`
