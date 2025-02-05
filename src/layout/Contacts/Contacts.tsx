import React from 'react';
import styled from "styled-components";

export const Contacts = () => {
    return (
        <StyledContacts>
            <StyledWrap>
                ИП Дондоков Гунга Базарович<br/>ИНН 540618782712<br/>ОГРН/ОГРНИП 324774600067364<br/><br/>Режим работы поддержки<br/>Ежедневно с 10:00 до 20:00<br/><br/>Адрес электронной почты<br/>godzilla-soft@yandex.ru<br/><br/>Номера телефонов<br/>+7 (925) 313 80 11<br/>+7 (999) 134 72 87<br/>+7 (901) 752 35 98
            </StyledWrap>
        </StyledContacts>
    );
};

// @ts-ignore
const StyledWrap = styled.p `
  color: white;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  
`;
// @ts-ignore
const StyledContacts = styled.div `
  margin-top: 200px;
`;
