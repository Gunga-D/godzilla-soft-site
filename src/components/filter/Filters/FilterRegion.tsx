import React, { useState } from 'react';
import styled from 'styled-components';
import {Icon} from "../../icon/Icon";
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
            <FilterDiv isOpen={isOpen}>
                <StyledDiv onClick={toggleFilter}>
                    <StyledP>Регион</StyledP>
                    <Icon iconId="arrow" width="15" height="15" viewBox="0 0 15 15" aria-hidden="true" />
                </StyledDiv>
                {isOpen && (
                    <OptionsContainer>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="region"
                                    value="RUS"
                                    checked={selectedOption === 'RUS'}
                                    onChange={RegionChange}
                                />
                                <StyledPrice>Россия</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="region"
                                    value="SNG"
                                    checked={selectedOption === 'SNG'}
                                    onChange={RegionChange}
                                />
                                <StyledPrice>Россия + СНГ</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="region"
                                    value="USA"
                                    checked={selectedOption === 'USA'}
                                    onChange={RegionChange}
                                />
                                <StyledPrice>США</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="region"
                                    value="SNGNORF"
                                    checked={selectedOption === 'SNGNORF'}
                                    onChange={RegionChange}
                                />
                                <StyledPrice>СНГ (Без РФ и РБ)</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="region"
                                    value="any"
                                    checked={selectedOption === 'any'}
                                    onChange={RegionChange}
                                />
                                <StyledPrice>Любой</StyledPrice>
                            </label>
                        </Option>
                        <Option>
                            <label>
                                <StyledInput
                                    type="radio"
                                    name="region"
                                    value="evro"
                                    checked={selectedOption === "evro"}
                                    onChange={handleOptionChange}
                                />
                                <StyledPrice>Евросоюз</StyledPrice>
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
  height: ${({ isOpen }) => (isOpen ? '228px' : '59px')};
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

