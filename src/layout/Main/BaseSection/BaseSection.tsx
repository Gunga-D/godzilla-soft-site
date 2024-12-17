import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Item} from "../../../common/api/item/item";
import {itemApi} from "../../../common/api/item/item-api";
import {CardForGames} from "../../../components/cardForGames/CardForGames";

type BaseSectionProps = {
    mainTitle?: string,
    url?: string,
}
export const BaseSection = (props: BaseSectionProps) => {
    const [item, setItem] = useState<Item[] | null>(null);
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await itemApi.getItem(`${props.url}`);
                setItem(data);
            } catch (err) {
            }
        };
        fetchItem();
    }, []);
    return (
        <StyledSeasonDiv>
            <div>
                <StyledH2>{props.mainTitle}</StyledH2>
                <StyledP>Показать все</StyledP>
            </div>

            <StyledWrapper>
                {item?.slice(0, 5).map((item, index) => (
                    <CardForGames
                        imageUrl={item.thumbnail_url}
                        height={'204px'}
                        width={'204px'}
                        key={index}/>
                ))}
            </StyledWrapper>
        </StyledSeasonDiv>
    );
};
const StyledSeasonDiv = styled.div `
  width: 100%;
  min-height: 383px;
  margin-top: 72px;
  display: flex;
  flex-direction: column;
`
const StyledH2 = styled.h3 `
  font-style: normal;
  font-weight: 1000;
  font-size: 48px;
  line-height: 56px;
  text-align: left;
  color: #FFFFFF;
  padding-top: 37px;
`
const StyledWrapper = styled.div `
  margin-top: 20px;
  gap: 25px;
  display: flex;
`
const ButtonWrap = styled.div `
  display: flex;
`
const ButtonStyled = styled.button `
  width: 149px;
  height: 49px;
  background: #FF333B;
  border-radius: 5px;
  color: white;
  border: none;
`
const StyledP = styled.p `
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  color: #D91E18;
  text-align: right;
  margin-top: 9px;
  &:hover{

  }
`
