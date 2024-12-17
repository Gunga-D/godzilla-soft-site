import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

const Logo = () => {
    return (
        <StyledWrap>
            <Icon width="157" height="48" viewBox="0 0 157 48" iconId='godzillaLogo' fill='black'/>
        </StyledWrap>
    );
};
const StyledWrap = styled.div `
  min-width: 157px;
`
export default Logo;
