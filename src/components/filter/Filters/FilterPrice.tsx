"use client";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStore } from "zustand/react";
import { FilterStore } from "../../../common/store/FilterStatus/FilterStatus";
import Image from "next/image";

export const FilterPrice = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const { changeMinPrice, changeMaxPrice } = useStore(FilterStore);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const toggleFilter = () => {
        setIsOpen(!isOpen);
        setSelectedOption('');
        changeMinPrice('');
        changeMaxPrice('');
    };

    useEffect(() => {
        setSelectedOption(null);
        changeMaxPrice('');
        changeMinPrice('');
    }, []);

    const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const [min, max] = value.split('-').map((v) => v.trim());
        setSelectedOption(value);
        changeMinPrice(min);
        changeMaxPrice(max);
        setMinPrice(min);
        setMaxPrice(max);
    };

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        changeMinPrice(value);
        setMinPrice(value);
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        changeMaxPrice(value);
        setMaxPrice(value);
    };

    return (
        <div>
            <FilterDiv data-is-open={isOpen}>
                <StyledDiv onClick={toggleFilter}>
                    <StyledP>Цена</StyledP>
                    <Image
                        src={`/arrow.svg`}
                        alt={'arrow'}
                        width={15}
                        height={15}
                        priority
                    />
                </StyledDiv>
                {isOpen && (
                    <OptionsContainer>
                        <InputContainer>
                            <InputStyled
                                placeholder='От 0'
                                value={minPrice}
                                onChange={handleMinChange}
                            />
                            <InputStyled
                                placeholder='До 90 000'
                                value={maxPrice}
                                onChange={handleMaxChange}
                            />
                        </InputContainer>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="price"
                                    value="0 - 1000"
                                    checked={selectedOption === '0 - 1000'}
                                    onChange={handlePriceRangeChange}
                                />
                                <StyledPrice>До 1000 ₽</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="price"
                                    value="1000 - 3000"
                                    checked={selectedOption === '1000 - 3000'}
                                    onChange={handlePriceRangeChange}
                                />
                                <StyledPrice>1000 ₽ - 3000 ₽</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="price"
                                    value="3000 - 6000"
                                    checked={selectedOption === '3000 - 6000'}
                                    onChange={handlePriceRangeChange}
                                />
                                <StyledPrice>3000 ₽ - 6000 ₽</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="price"
                                    value="6000 - 20000"
                                    checked={selectedOption === '6000 - 20000'}
                                    onChange={handlePriceRangeChange}
                                />
                                <StyledPrice>6000 ₽ и выше</StyledPrice>
                            </label>
                        </Option>
                    </OptionsContainer>
                )}
            </FilterDiv>
        </div>
    );
};

const FilterDiv = styled.div<{ 'data-is-open': boolean }>`
  width: 287px;
  height: ${({ 'data-is-open': isOpen }) => (isOpen ? '260px' : '59px')};
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 15px;
`;

const StyledPrice = styled.div`
  font-weight: 900;
  font-size: 13px;
  line-height: 16px;
  color: #FFFFFF;
  opacity: 0.5;
`;

const InputStyled = styled.input`
  width: 123px;
  height: 37px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  outline: none;
  padding: 10px 15px;
  &::placeholder {
    color: #FFFFFF;
    opacity: 0.5;
  }
  font-weight: 900;
  color: rgba(217, 217, 217, 0.2);
  background: rgba(217, 217, 217, 0.2);
  color: #FFFFFF;
  opacity: 0.5;
`;
