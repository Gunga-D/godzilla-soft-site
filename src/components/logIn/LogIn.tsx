import React from 'react';
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { Link } from "react-router-dom";

export const LogIn = () => {
    return (
        <StyledLogin>
            <StyledLink to='/login'>
                <Icon iconId={'logIn'} height={'13'} width={'13'} viewBox={'0 0 13 13'} />
            </StyledLink>
            <StyledLink to='/login'>
                <StyledText> Войти </StyledText>
            </StyledLink>
        </StyledLogin>
    );
};

const StyledLogin = styled.div`
  display: flex;
  cursor: pointer;
  height: 20px;
  gap: 9px;
  font-size: 13px;
  align-items: center;
  margin-left: 52px;
`;

const StyledText = styled.div`
  font-weight: 900;
  color: white;
`;

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: inherit; 
`;
