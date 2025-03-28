"use client"
import Image from "next/image";
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useStore} from "zustand/react";
import {FilterStore} from "../../../common/store/FilterStatus/FilterStatus";


export const FilterPlatform = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const {changePlatform } = useStore(FilterStore);

    const toggleFilter = () => {
        setIsOpen(!isOpen);
        setSelectedOption('');
        changePlatform('');
    };

    const PlatformChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        changePlatform(value)
    };
    useEffect(() => {
        setSelectedOption(null);
        changePlatform('');
    }, []);
    return (
        <div>
            <FilterDiv data-is-open={isOpen}>
                <StyledDiv onClick={toggleFilter}>
                    <StyledP>Платформа</StyledP>
                    <Image
                        src={`/arrow.svg`}
                        alt={'arrow'}
                        width={15}
                        height={15}
                        priority
                    />                </StyledDiv>
                {isOpen && (
                    <OptionsContainer>
                    <Option>
                        <label>
                            <StyledInput
                                type="radio"
                                name="platform"
                                value="Steam"
                                checked={selectedOption === 'Steam'}
                                onChange={PlatformChange}
                            />
                            <StyledPrice>Steam</StyledPrice>
                        </label>
                    </Option>
                    <Option>
                        <label>
                            <StyledInput
                                type="radio"
                                name="platform"
                                value="Rockstar"
                                checked={selectedOption === 'Rockstar'}
                                onChange={PlatformChange}
                            />
                            <StyledPrice>Rockstar</StyledPrice>
                        </label>
                    </Option>
                    <Option>
                        <label>
                            <StyledInput
                                type="radio"
                                name="platform"
                                value="EA Play"
                                checked={selectedOption === 'EA Play'}
                                onChange={PlatformChange}
                            />
                            <StyledPrice>EA Play (Origin)</StyledPrice>
                        </label>
                    </Option>
                    <Option>
                        <label>
                            <StyledInput
                                type="radio"
                                name="platform"
                                value="Minecraft.net"
                                checked={selectedOption === 'Minecraft.net'}
                                onChange={PlatformChange}
                            />
                            <StyledPrice>Minecraft</StyledPrice>
                        </label>
                    </Option>
                    <Option>
                        <label>
                            <StyledInput
                                type="radio"
                                name="platform"
                                value="GOG"
                                checked={selectedOption === 'GOG'}
                                onChange={PlatformChange}
                            />
                            <StyledPrice>GOG</StyledPrice>
                        </label>
                    </Option>
                    <Option>
                        <label>
                            <StyledInput
                                type="radio"
                                name="platform"
                                value="Microsoft Store"
                                checked={selectedOption === 'Microsoft Store'}
                                onChange={PlatformChange}
                            />
                            <StyledPrice>Microsoft Store</StyledPrice>
                        </label>
                    </Option>
                    <Option>
                        <label>
                            <StyledInput
                                type="radio"
                                name="platform"
                                value=""
                                checked={selectedOption === ""}
                                onChange={PlatformChange}
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

