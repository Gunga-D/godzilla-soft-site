import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { SearchItem } from '../../common/api/searchItem/searchItem';

export const InputFound = () => {
    const [value, setValue] = React.useState<string>('');
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null); // Добавляем для отладки ошибок
    const [searchItems, setsSearchItems] = useState<[]>([]);
    return (
        <InputContainer>
            <CustomPlaceholder>
                <Icon iconId="loops" width="20" height="20" viewBox="0 0 20 20" />
                <StyledInput
                    type="text"
                    // value={setInputValue(val)}
                    placeholder="Найти"

                />
                {isPopupOpen && (
                    <StyledPopUp isOpen={isPopupOpen}>
                        {isLoading ? (
                            <LoadingMessage>Загрузка...</LoadingMessage>
                        ) : error ? (
                            <ErrorMessage>{error}</ErrorMessage>
                        ) : searchResults.length > 0 ? (
                            <GameList>
                                {searchResults.map((game, index) => (
                                    <GameItem key={index}>
                                        {game.title || 'Без названия'}
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

const LoadingMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #aaa;
  font-size: 16px;
`;

const ErrorMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #ff4d4d;
  font-size: 16px;
`;
