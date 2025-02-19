import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Icon} from "../../components/icon/Icon";

export const PaymentSuccess = () => {
    return (
        <PaymentStyled>
            <StyledH1>Успешно!</StyledH1>
            <StyledSubtitle>Ваш код уже на Вашей почте</StyledSubtitle>
            <StyledText>Ждем вас снова!</StyledText>
            <StyledLink to={'/catalog/category/games'}><StyledReturn>Вернуться на главную</StyledReturn></StyledLink>
            <StyledLink to={'https://t.me/GungaD'}><StyledButton>
                {/*<Icon iconId='Support' width='32px' height='32px'  />*/}
                Остались вопросы?
            </StyledButton></StyledLink>
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
  padding: 10px 20px;
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
  padding: 10px 20px;
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
const  StyledLink = styled(Link)`
  text-decoration: none;
`;

