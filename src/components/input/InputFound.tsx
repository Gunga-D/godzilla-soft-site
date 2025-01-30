import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { SearchItem } from '../../common/api/searchItem/searchItem';
import {searchApi} from "../../common/api/searchItem/search-api";

export const InputFound = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null); // Добавляем для отладки ошибок

    const onFocusHandler = () => {
      setIsPopupOpen(true)
    }
    const onBlurHandler = () => {
      setIsPopupOpen(false)
    }
    const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true)
      try {
        const data = await searchApi.suggest(e.target.value);
        setSearchResults(data)
      } catch (err) {
        setError("Произошла предвиденная ошибка")
      } finally {
        setIsLoading(false)
      }
    }
    return (
        <InputContainer>
            <CustomPlaceholder>
                <Icon iconId="loops" width="20" height="20" viewBox="0 0 20 20" />
                <StyledInput
                    type="text"
                    placeholder="Найти"
                    onChange={changeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                />

                {isPopupOpen && (
                    <StyledPopUp isOpen={isPopupOpen}>
                        {isLoading ? (
                            <LoadingMessage>Загрузка...</LoadingMessage>
                        ) : error ? (
                            <ErrorMessage>{error}</ErrorMessage>
                        ) : searchResults?.length > 0 ? (
                            <GameList>
                                {searchResults.map((game, index) => (
                                    <GameItem key={index}>
                                        <div>
                                          <img src={game.item_thumbnail_url} width={100} height={100} style={{borderRadius: '10px'}}></img>
                                        </div>
                                        <div style={{marginLeft: '25px'}}>
                                          <StyledGameName>{game.item_title || 'Без названия'}</StyledGameName>
                                          <br/>
                                          <StyledPNewPrice>{game.item_current_price}</StyledPNewPrice>
                                          {game.item_is_for_sale && (
                                            <StyledPOldPrice>{game.item_old_price}</StyledPOldPrice>
                                          )}
                                        </div>
                                    </GameItem>
                                ))}
                            </GameList>
                        ) : (
                            <NoResultsMessage>Результатов не найдено</NoResultsMessage>
                        )}
                    </StyledPopUp>
                )}
            </CustomPlaceholder>
        </InputContainer>
    );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 347px;
  height: 46px;
  margin-left: 72px;
  border: 1px solid #ffffff;
  backdrop-filter: blur(44.9px);
  border-radius: 5px;
`;

const StyledInput = styled.input`
  width: 300px;
  background: none;
  outline: none;
  border: none;
  font-weight: 900;
  font-size: 13px;
  line-height: 16px;
  color: #f1f1f0;
  opacity: 0.5;
  margin-left: 20px;
  caret-color: red;
  text-overflow: ellipsis;
  &::placeholder {
    color: #f1f1f0;
    opacity: 1;
  }
`;

const CustomPlaceholder = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  color: #f1f1f0;
  margin-left: 15px;
`;

const StyledPopUp = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 300%;
  right: 0;
  z-index: 999;
  width: 730px;
  height: auto;
  max-width: 730px;
  max-height: 430px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background: #000000b2;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  @supports ((backdrop-filter: blur(21.35px)) or (-webkit-backdrop-filter: blur(21.35px))) {
    backdrop-filter: blur(21.35px);
    -webkit-backdrop-filter: blur(21.35px);
  }
`;

const GameList = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const GameItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: start;
`;

const NoResultsMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const LoadingMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const StyledGameName = styled.p`
  font-weight: 900;
  font-size: 24px;
  line-height: 12px;
  color: #fff;
  position: relative;
  display: inline-block;
  width: auto;
  margin-bottom: 20px;
`

const StyledPNewPrice = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 12px;
  color: #fff;
  display: inline-block;
  float: left;

  &:after {
    content: "₽";
    font-size: 18px;
    margin-left: 1px;
  }
`

const StyledPOldPrice = styled.p`
  margin-left: 5px;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 12px;
  color: #848484;
  position: relative;
  display: inline-block;
  width: auto;

  &:after {
    content: "₽";
    font-size: 18px;
    margin-left: 1px;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background-color: #D91E18;
    transform: rotate(-15deg);
    transform-origin: center;
  }
`;

const ErrorMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #ff4d4d;
  font-size: 16px;
`;
