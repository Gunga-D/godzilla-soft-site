" "
import React from 'react';
import styled from "styled-components";


export const NotFoundPage = () => {
    return (
        <NotFoundGame>
            <StyledH1>404</StyledH1>
            <StyledSubtitle>Страница не найдена</StyledSubtitle>
            <StyledText>Извините, запрашиваемая страница не существует.</StyledText>
            <StyledReturn>Вернуться на главную</StyledReturn>
        </NotFoundGame>
    );
};

const NotFoundGame = styled.div `
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

