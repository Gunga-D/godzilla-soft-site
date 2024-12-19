import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

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
            <Icon width="157" height="48" viewBox="0 0 157 48" iconId="godzillaLogo" fill="black" />
        </StyledWrap>
    );
};

const StyledWrap = styled.div`
  min-width: 157px;
  cursor: pointer;
`;

export default Logo;
