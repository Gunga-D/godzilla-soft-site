import React from 'react';
import styled, { css } from "styled-components";

type MenuProps = {
    activePage?: string,
}

export const Menu = (props: MenuProps) => {
    const activeItem = props.activePage;

    return (
        <StyledMenu>
            <StyledUl>
                <StyledLi isActive={activeItem === 'Каталог'}>Каталог</StyledLi>
                <StyledLi isActive={activeItem === 'Игры'}>Игры</StyledLi>
                <StyledLi isActive={activeItem === 'Пополнение'}>Пополнение</StyledLi>
                <StyledLi isActive={activeItem === 'Подписки'}>Подписки</StyledLi>
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
    isActive: boolean;
};

const StyledLi = styled.li<StyledLiProps>`
  transition: background 0.3s ease-out, padding 0.3s ease-out, border-radius 0.3s ease-out;
  padding: 5px 11px;
  cursor: pointer;
  border-radius: 5px;

  ${({ isActive }) => isActive && css`
    background: #FF333B;
  `}

  &:hover{
    background: #FF333B;
    transition: 0.3s ease-out;
  }
`;
