import React from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {Filter} from "../../components/filter/Filter";
import {CatalogItems} from "../../components/catalogItems/CatalogItems";

type CatalogProps = {
    path?: string,
    id?: string,
}
export const Catalog = (props: CatalogProps) => {

    return (
        <StyledDiv>
            <StyledH2>Каталог</StyledH2>
            <StyledWrapper>
                <Filter/>
                <CatalogItems active={props.id}/>
            </StyledWrapper>
        </StyledDiv>
    );
};

const StyledDiv = styled.div `
  color: white;
  margin-top: 100px;
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
