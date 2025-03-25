" "
import React from 'react';
import styled from "styled-components";


type PaymentSuccessProps = {
  description?: string,
}

export const PaymentSuccess = (props: PaymentSuccessProps) => {
    return (
        <PaymentStyled>
            <StyledH1>Успешно!</StyledH1>
            <StyledSubtitle>{props.description||"Код активации придет вам на почту в течение 5-10 минут"}</StyledSubtitle>
            <StyledText>Спасибо большое за покупку, ждем вас снова!</StyledText>
            <StyledReturn>Вернуться на главную</StyledReturn>
            <StyledButton>
                Остались вопросы?
            </StyledButton>
        </PaymentStyled>
    );
};

const PaymentStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #ffffff;
  text-align: center;
  padding: 20px;

`
const StyledH1 = styled.h1 `
  font-size: 6rem;
  margin: 0;
  color: #ff4757;

`
const StyledSubtitle = styled.div `
  font-size: 2rem;
  margin: 10px 0;

`
const StyledText = styled.text `
  font-size: 1.2rem;
  margin: 10px 0;

`
const StyledReturn = styled.div `
  margin-top: 20px;
  width: 250px;
  padding: 12px 0;
  background-color: #FF333B;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    color: #FF333B;
    background: white;
  }

`
const StyledButton = styled.div `
  margin-top: 20px;
  width: 250px;
  padding: 12px 0;
  background-color: white;
  color: #FF333B;
  text-decoration: none;
  border-radius: 5px;
  transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    color: white;
    background: #FF333B;
  }

`

