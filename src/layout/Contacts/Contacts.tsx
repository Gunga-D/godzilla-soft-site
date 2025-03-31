"use client"
import React from 'react';
import styled from "styled-components";

export const ContactsPage = () => {
    return (
        <StyledContacts>
            <StyledWrap>
                ИП Дондоков Гунга Базарович<br/>
                ИНН 540618782712<br/>ОГРН/ОГРНИП 324774600067364<br/><br/>Режим работы поддержки<br/>Ежедневно с 10:00 до 20:00<br/><br/>Адрес электронной почты<br/>godzilla-soft@yandex.ru<br/>
            </StyledWrap>
        </StyledContacts>
    );
};

const StyledContacts = styled.div `
  margin-top: 200px;
`

const StyledWrap = styled.p `
  color: white;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
`;
