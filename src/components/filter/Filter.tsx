import React from 'react';
import styled from 'styled-components';
import {FilterPrice} from "./Filters/FilterPrice";
import {FilterPlatform} from "./Filters/FilterPlatform";
import {FilterRegion} from "./Filters/FilterRegion";

export const Filter = () => {
    return (
        <StyledDiv>
            <FilterPrice/>
            <FilterPlatform/>
            <FilterRegion/>
        </StyledDiv>
    );
};

const StyledDiv = styled.div `
  display: flex;
  flex-direction: column;
  gap: 10px;
`
