import React from 'react';
import styled from "styled-components";
import {Container} from "../../styles/Container";
import Logo from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu";
import {InputFound} from "../../components/input/InputFound";
import {LogIn} from "../../components/logIn/LogIn";

type HeaderProps = {
    activePage?: string
}
export const Header = (props: HeaderProps) => {
    return (
        <StyledHeader>
            <Container>
                <HeaderWrap>
                    <Logo/>
                    <Menu/>
                    <InputFound/>
                    {/*<LogIn/>*/}
                </HeaderWrap>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
  color: white;
  position: fixed;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  width: 100%;
  height: 86px;
  top: 0;
  z-index: 2;
  left: 0;
`
const HeaderWrap = styled.div `
  display: flex;
  
  align-items: center;
  padding-top: 18px;
`
