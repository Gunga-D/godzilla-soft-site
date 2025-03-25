import React from 'react';
import styled from "styled-components";
import { Icon } from "../icon/Icon";


export const LogIn = () => {
    return (
        <StyledLogin>

                <Icon iconId={'logIn'} height={'13'} width={'13'} viewBox={'0 0 13 13'} />
                <StyledText> Войти </StyledText>
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


