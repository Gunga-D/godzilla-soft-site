"use client"
import Image from "next/image";
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useStore} from "zustand/react";
import {FilterStore} from "../../../common/store/FilterStatus/FilterStatus";


export const FilterRegion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const {changeRegion } = useStore(FilterStore);

    const toggleFilter = () => {
        setIsOpen(!isOpen);
        setSelectedOption('');
        changeRegion('');
    };
    useEffect(() => {
        setSelectedOption(null);
        changeRegion('');
    }, []);
    const RegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        changeRegion(value)
    };
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <FilterDiv data-is-open={isOpen}>
                <StyledDiv onClick={toggleFilter}>
                    <StyledP>Регион</StyledP>
                    <Image
                        src={`/arrow.svg`}
                        alt={'arrow'}
                        width={15}
                        height={15}
                        priority
                    />                    </StyledDiv>
                {isOpen && (
                    <OptionsContainer>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="region"
                                    value="%D0%92%D0%B5%D1%81%D1%8C%20%D0%BC%D0%B8%D1%80"
                                    checked={selectedOption === '%D0%92%D0%B5%D1%81%D1%8C%20%D0%BC%D0%B8%D1%80'}
                                    onChange={RegionChange}
                                />
                                <StyledPrice>Весь мир</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="region"
                                    value="%D0%A0%D0%A4%20%D0%B8%20%D0%A1%D0%9D%D0%93"
                                    checked={selectedOption === '%D0%A0%D0%A4%20%D0%B8%20%D0%A1%D0%9D%D0%93'}
                                    onChange={RegionChange}
                                />
                                <StyledPrice>РФ и СНГ</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="region"
                                    value="%D0%A0%D0%A4"
                                    checked={selectedOption === '%D0%A0%D0%A4'}
                                    onChange={RegionChange}
                                />
                                <StyledPrice>РФ</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="region"
                                    value="%D0%92%D0%B5%D1%81%D1%8C%20%D0%BC%D0%B8%D1%80%20%D0%BA%D1%80%D0%BE%D0%BC%D0%B5%20%D0%A0%D0%A4"
                                    checked={selectedOption === '%D0%92%D0%B5%D1%81%D1%8C%20%D0%BC%D0%B8%D1%80%20%D0%BA%D1%80%D0%BE%D0%BC%D0%B5%20%D0%A0%D0%A4'}
                                    onChange={RegionChange}
                                />
                                <StyledPrice>Весь мир кроме РФ</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="region"
                                    value=""
                                    checked={selectedOption === ''}
                                    onChange={RegionChange}
                                />
                                <StyledPrice>Другое</StyledPrice>
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
  height: ${({ 'data-is-open': isOpen }) => (isOpen ? '210px' : '59px')};
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

const StyledPrice = styled.div `

  font-weight: 900;
  font-size: 13px;
  line-height: 16px;

  color: #FFFFFF;

  opacity: 0.5;

`

