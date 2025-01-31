import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

// type MenuProps = {
//     activePage?: string,
// }

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledUl>
                <StyledLink to={'/catalog'}><StyledLi>Каталог</StyledLi></StyledLink>
                <StyledLink to={'/catalog/games'}><StyledLi>Игры</StyledLi></StyledLink>
                <StyledLink to={'/catalog/invoice'}><StyledLi>Пополнение</StyledLi></StyledLink>
                <StyledLink to={'/catalog/subscriptions'}><StyledLi>Подписки</StyledLi></StyledLink>
            </StyledUl>
        </StyledMenu>
    );
};

const StyledLink = styled(Link)`
  text-decoration: none;  
`;

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
  color: white;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: none;  
    color: #FF333B;
    transition: 0.2s ease-out;
  }
`;
