import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Item} from "../../../common/api/item/item";
import {itemApi} from "../../../common/api/item/item-api";
import {MediumCardForGames} from "../../../components/cardForGames/MediumCardForGames";
import {Link, useNavigate} from "react-router-dom";

type BaseSectionProps = {
    mainTitle?: string,
    url?: string,
}
export const BaseSection = (props: BaseSectionProps) => {
    const [item, setItem] = useState<Item[] | null>(null);
    const navigate = useNavigate();

    const handleCardClick = (id: number | undefined) => {
        navigate(`/catalog/${id}`);
    };
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await itemApi.getItem(`${props.url}`);
                setItem(data);
            } catch (err) {
            }
        };
        fetchItem();
    }, [props.url]);
    return (
        <StyledSeasonDiv>
            <div>
                <StyledH2>{props.mainTitle}</StyledH2>
                <StyledLink to={'/catalog/category/10001'}><StyledP>Показать все</StyledP> </StyledLink>
            </div>

            <StyledWrapper>
                {item?.slice(0, 5).map((item, index) => (
                    <MediumCardForGames
                        // bigCard = {true}
                        is_for_sale={item.is_for_sale}
                        nameGame={item.title}
                        oldPrice={item.old_price}
                        newPrice={item.current_price}
                        transform={true}
                        imageUrl={item.thumbnail_url}
                        height={'204px'}
                        width={'204px'}
                        key={index}
                        onClick = {() => handleCardClick(item.id)}

                    />
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
    color: white;
    transition: 0.3s ;

  }
`

const StyledLink = styled(Link)`
  text-decoration: none;  
  //color: white;
`;
