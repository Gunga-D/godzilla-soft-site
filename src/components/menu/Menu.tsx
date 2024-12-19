import React from 'react';
import styled from "styled-components";

// type MenuProps = {
//     activePage?: string,
// }

export const Menu = () => {
    // const activeItem = props.activePage;
    // <StyledLi isActive={activeItem === 'Игры'}>Игры</StyledLi>

    return (
        <StyledMenu>
            <StyledUl>
                <StyledLi>Каталог</StyledLi>
                <StyledLi isActive>Игры</StyledLi>
                <StyledLi isActive>Пополнение</StyledLi>
                <StyledLi isActive>Подписки</StyledLi>
            </StyledUl>
        </StyledMenu>
    );
};

const StyledMenu = styled.menu`
  padding-left: 48px;
  font-size: 14px;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 10px;
  font-weight: 900;
  text-decoration: none;
  list-style-type: none;
`;

type StyledLiProps = {
    isActive?: boolean;
};

const StyledLi = styled.li<StyledLiProps>`
  transition: background 0.3s ease-out, padding 0.3s ease-out, border-radius 0.3s ease-out;
  padding: 5px 11px;
  cursor: pointer;
  border-radius: 5px;

  

  &:hover{
    cursor: pointer;
    color: #FF333B;
    transition: 0.2s ease-out;
  }
`;
