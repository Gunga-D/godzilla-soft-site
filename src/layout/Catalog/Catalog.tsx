"use client"
import React from 'react';
import styled from "styled-components";
import {Filter} from "../../components/filter/Filter";
import {CatalogItems} from "../../components/catalogItems/CatalogItems";

type CatalogProps = {
    active?: string,
}
export const CatalogComponent = (props: CatalogProps) => {
    return (
        <StyledDiv>
            <StyledH2>Каталог</StyledH2>
            <div style={{ display: 'flex', marginTop: '55px', gap: '15px' }}>
                    <Filter/>
                    <CatalogItems active={props.active}/>
            </div>
        </StyledDiv>
    );
};

const StyledDiv = styled.div `
  color: white;
  font-family: Helvetica;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2%;
`
const StyledH2 = styled.h2 `
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
  color: #FFFFFF;
`
const StyledWrapper = styled.div `
  display: flex;
  margin-top: 55px;
  gap: 15px;
`
