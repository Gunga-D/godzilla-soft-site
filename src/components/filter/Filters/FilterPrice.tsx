import React, { useState } from 'react';
import styled from 'styled-components';
import {Icon} from "../../icon/Icon";


export const FilterPrice = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const toggleFilter = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <FilterDiv isOpen={isOpen}>
                <StyledDiv onClick={toggleFilter}>
                    <StyledP>Цена</StyledP>
                    <Icon iconId="arrow" width="15" height="15" viewBox="0 0 15 15" aria-hidden="true" />
                </StyledDiv>
                {isOpen && (
                    <OptionsContainer>
                        <InputContainer>
                            <InputStyled placeholder='От 0'/>
                            <InputStyled placeholder='До 90 000'/>
                        </InputContainer>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="price"
                                    value="До 1000 ₽"
                                    checked={selectedOption === 'До 1000 ₽'}
                                    onChange={handleOptionChange}
                                />
                            <StyledPrice>До 1000 ₽</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="price"
                                    value="1000 ₽ - 3000 ₽"
                                    checked={selectedOption === '1000 ₽ - 3000 ₽'}
                                    onChange={handleOptionChange}
                                />
                            <StyledPrice>1000 ₽ - 3000 ₽</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="price"
                                    value="3000 ₽ - 6000 ₽"
                                    checked={selectedOption === '3000 ₽ - 6000 ₽'}
                                    onChange={handleOptionChange}
                                />
                            <StyledPrice>3000 ₽ - 6000 ₽</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="price"
                                    value="6000 ₽ и выше"
                                    checked={selectedOption === '6000 ₽ и выше'}
                                    onChange={handleOptionChange}
                                />
                                <StyledPrice>6000 ₽ и выше</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="price"
                                    value="Рандом"
                                    checked={selectedOption === 'Рандом'}
                                    onChange={handleOptionChange}
                                />
                            <StyledPrice>Рандом</StyledPrice>
                            </label>
                        </Option>
                    </OptionsContainer>
                )}
            </FilterDiv>
        </div>
    );
};

const FilterDiv = styled.div<{ isOpen: boolean }>`
  width: 287px;
  height: ${({ isOpen }) => (isOpen ? '278px' : '59px')};
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: height 0.4s ease-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

`;

const Option = styled.div`
  //margin-bottom: 13px;
  font-size: 13px;
  line-height: 16px;
  color: #FFFFFF;
  opacity: 0.5;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  input {
    margin-right: 8px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 50px;
  margin-right: 10px;
`;

const StyledP = styled.p`
  font-style: normal;
  font-weight: 900;
  padding-left: 10px;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const StyledInput = styled.input`
  cursor: pointer;
`;

const InputContainer = styled.div `
  display: flex;
  flex-direction: row;
  gap:  10px;
  margin-bottom: 15px;
`
const StyledPrice = styled.div `
 
  font-weight: 900;
  font-size: 13px;
  line-height: 16px;

  color: #FFFFFF;

  opacity: 0.5;

`
const InputStyled = styled.input `
  width: 123px;
  height: 37px;
  background: #FFFFFF;
  opacity: 0.2;
  border: 1px solid #FFFFFF;
  border-radius: 10px;
  outline: none;
  padding: 10px 15px;
  color: rgba(0, 0, 0, 0.62);

`
