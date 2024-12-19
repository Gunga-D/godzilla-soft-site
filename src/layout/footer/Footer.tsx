import React from 'react';
import styled from "styled-components";
import {Container} from "../../styles/Container";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <Container>
            <StyledFooter>
                <NavUl>
                    <StyledLi>Каталог</StyledLi>
                    <StyledLi>Игры</StyledLi>
                    <StyledLi>Пополнение</StyledLi>
                    <StyledLi>Подписки</StyledLi>
                    <StyledLi>Контакты</StyledLi>
                    <StyledLi>Поддержка</StyledLi>
                </NavUl>
                <PaymentUl>
                    <Icon iconId="VISA" width="74" height="23" viewBox="0 0 74 23"/>
                    <Icon iconId="MIR" width="84" height="26" viewBox="0 0 84 26"/>
                    <Icon iconId="MasterCard" width="133" height="26" viewBox="0 0 133 26"/>
                </PaymentUl>
                <StyledDocuments>
                    <StyledLiDocs>Пользовательское соглашение</StyledLiDocs>
                    <StyledLiDocs>Политика конфиденциальности</StyledLiDocs>
                    <StyledLiDocs>Лицензионный договор-оферта</StyledLiDocs>
                    <StyledLiDocs>Договор-оферта оказания услуг</StyledLiDocs>
                </StyledDocuments>
                <PrivacyPolitics>
                    ©2023 — 2024 IGM Key Store. Все права защищены. Копирование любых материалов сайта запрещено! Все названия продуктов и игр, компаний и марок, логотипы, товарные знаки и другие материалы являются собственностью соответствующих владельцев. Только лицензионные ключи ко всем игровым платформам: Steam, Uplay, Battle.net, Origin и другие. Все продаваемые ключи закупаются у официальных дистрибьюторов и напрямую у издателей.
                </PrivacyPolitics>
            </StyledFooter>
        </Container>

    );
};

const PaymentUl = styled.div `
  margin-top: 91px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  
`

const NavUl = styled.ul `
  display: flex;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  flex-direction: row;
  gap: 27px;
`
const StyledLi = styled.li `
  text-decoration: none;
  list-style-type: none;
  font-style: normal;
  color: #FFFFFF;
  cursor: pointer;
`
const StyledLiDocs = styled.li `
  text-decoration: none;
  list-style-type: none;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  opacity: 0.5;
`;
const StyledFooter = styled.footer `
  padding-top: 240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledDocuments = styled.div `
  margin-top: 31px;
  display: flex;
  gap: 124px;
`;
const PrivacyPolitics = styled.div `
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin-top: 40px;
  margin-bottom: 90px;
  line-height: 15px;
  text-align: center;
  color: #FFFFFF;
`;
