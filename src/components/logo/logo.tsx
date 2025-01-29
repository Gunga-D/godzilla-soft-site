import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import {Image} from "../image/Image";
import Img from "../../assets/images/Logo.png"
export const Logo: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const clickOnLogo = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <StyledWrap onClick={clickOnLogo}>
            <Image src={Img} height='48px' width='157px' hoverEffect={true} cursor={true} />
            {/*<Icon width="157" height="48" viewBox="0 0 157 48" iconId="godzillaLogo" fill="black" />*/}
        </StyledWrap>
    );

    //TODO: исправить хуйню с курсором
};

const StyledWrap = styled.div`
  min-width: 157px;
  cursor: pointer;
`;

export default Logo;
