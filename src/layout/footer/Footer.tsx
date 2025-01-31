import React from 'react';
import styled from "styled-components";
import {Container} from "../../styles/Container";
import {Icon} from "../../components/icon/Icon";
import { Link } from 'react-router-dom';
// @ts-ignore
import privacy_security from '../../pdf/privacy_security.pdf'
// @ts-ignore
import service_agreement from '../../pdf/service_agreement.pdf'

export const Footer = () => {
    return (
        <Container>
            <StyledFooter>
                <NavUl>
                    <StyledLink to={'/catalog'}><StyledLi>Каталог</StyledLi></StyledLink>
                    <StyledLink to={'/catalog/games'}><StyledLi>Игры</StyledLi></StyledLink>
                    <StyledLink to={'/catalog/invoice'}><StyledLi>Пополнение</StyledLi></StyledLink>
                    <StyledLink to={'/catalog/subscriptions'}><StyledLi>Подписки</StyledLi></StyledLink>
                    <StyledLink to="https://t.me/GungaD"><StyledLi>Контакты</StyledLi></StyledLink>
                    <StyledLink to="https://t.me/GungaD"><StyledLi>Поддержка</StyledLi></StyledLink>
                </NavUl>
                <PaymentUl>
                    <Icon iconId="VISA" width="74" height="23" viewBox="0 0 74 23"/>
                    <Icon iconId="MIR" width="84" height="26" viewBox="0 0 84 26"/>
                    <Icon iconId="MasterCard" width="133" height="26" viewBox="0 0 133 26"/>
                </PaymentUl>
                <StyledDocuments>
                    <StyledLiDocs><StyledA href={privacy_security}>Политика конфиденциальности</StyledA></StyledLiDocs>
                    <StyledLiDocs><StyledA href={service_agreement}>Лицензионный договор-оферта</StyledA></StyledLiDocs>
                </StyledDocuments>
                <PrivacyPolitics>
                    GodzillaSoft лучше всех
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

  text-decoration: none;
  list-style-type: none;
  gap: 27px;
`
const StyledLi = styled.li`
  transition: background 0.3s ease-out, padding 0.3s ease-out, border-radius 0.3s ease-out;
  padding: 5px 11px;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: #FF333B;
    transition: 0.2s ease-out;
  }
`;
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
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledA = styled.a `
  text-decoration: none;
  color: white;
`
