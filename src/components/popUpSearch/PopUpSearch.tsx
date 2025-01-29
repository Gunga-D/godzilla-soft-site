import React, {useState} from 'react';
import styled from "styled-components";
import {SearchItem} from "../../common/api/searchItem/searchItem";

type PopUpProps = {
    isOpen?: boolean,
    result: Array<SearchItem>,
}
export const PopUpSearch = (props: PopUpProps) => {
    return (
        <></>
    );
};

const StyledPopUp = styled.div <PopUpProps>`
  position: absolute;
  top: 300%;
  right: 0;
  z-index: 999;
  width: 730px;
  height: 430px;
  max-width: 730px;
  max-height: 430px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; // Скрываем через стиль
  background:#000000B2;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  @supports ((backdrop-filter: blur(21.35px)) or (-webkit-backdrop-filter: blur(21.35px))) {
    backdrop-filter: blur(21.35px);
    -webkit-backdrop-filter: blur(21.35px);
  }

`
const GameList = styled.ul`
  max-height: 200px; 
  overflow-y: auto;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const GameItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

const NoResultsMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

//todo поправить блюр

