import React from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";

type CatalogProps = {
    path?: string,
    id?: string | number,
}
export const Catalog = (props: CatalogProps) => {
    const { id } = useParams();

    return (
        <StyledDiv>
            {id}
            <p>
            Привет! Тут скоро будет страница </p>
            {props.path}
            {props.id}
        </StyledDiv>
    );
};

const StyledDiv = styled.div `
  color: white;
  margin-top: 200px;
`
