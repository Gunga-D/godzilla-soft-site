import React from 'react';
import styled from "styled-components";

export const NotFoundPage = () => {
    return (
        <StyledNotFound>
            Извините ничего не нашли
        </StyledNotFound>
    );
};

const StyledNotFound = styled.div `
    margin-top: 200px;
  color: white; 
`
