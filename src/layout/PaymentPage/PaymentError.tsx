" "
import React from 'react';
import styled from "styled-components";


export const PaymentError = () => {
    return (
        <PaymentStyled>
            <StyledH1>Ошибка</StyledH1>
            <StyledSubtitle>Извините, что-то пошло не так при оплате</StyledSubtitle>
            <StyledText>Повторите, пожалуйста, попытку позже.</StyledText>
             <StyledReturn>Вернуться на главную</StyledReturn>
            <StyledButton>
                Обратиться в поддержку
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
