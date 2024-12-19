import React, {useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type PropsInput = {
    onClick?: React.MouseEventHandler<HTMLInputElement>;
}
export const InputFound = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <InputContainer>
            <CustomPlaceholder>
                <Icon iconId={'loops'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
                <StyledInput
                    type="text"
                    value={inputValue}
                    placeholder="Найти"
                    onChange={e => setInputValue(e.target.value)}
                />
            </CustomPlaceholder>
        </InputContainer>

    );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 347px;
  margin-left: 72px;
  height: 46px;
  
  border: 1px solid #FFFFFF;
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
  color: #F1F1F0;
  opacity: 0.5;
  margin-left: 20px;
  caret-color: red;
  text-overflow: ellipsis;
  &::placeholder {
    color: #F1F1F0; 
    opacity: 1;     
  }
`;

const CustomPlaceholder = styled.div`
  display: flex;
  align-items: center;
  
  color: #F1F1F0;
  margin-left: 15px;
`;
