"use client";

import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Item } from "../../../common/api/item/item";
import { itemApi } from "../../../common/api/item/item-api";
import SeasonBackground from "../../../assets/images/SeasonSection/23feb.png";
import { BigCardForGame } from "../../../components/cardForGames/BigCardForGame";
import { transliterate } from '../../../hooks/transliterate';
import Image from "next/image";
import {useRouter} from "next/navigation";

type SeasonSectionProps = {
    mainTitle?: string,
    url?: string,
}

export const SeasonSection = (props: SeasonSectionProps) => {
    const [item, setItem] = useState<Item[] | null>(null);
    const router = useRouter();

    const handleCardClick = (categoryID: number | undefined, itemName: string | undefined, itemId: number | undefined) => {
        let catalogPath = "";
        switch (categoryID) {
            case 10001:
                catalogPath = "games";
                break;
            case 10002:
                catalogPath = "subscriptions";
                break;
            case 10004:
                catalogPath = "deposits";
                break;
        }
        itemName = transliterate(itemName!);
        router.push(`/${catalogPath}/${itemName?.replaceAll(" ", "_")}_${itemId}`);
    };

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await itemApi.getItem(`${props.url}`);
                setItem(data);
            } catch (err) {
                console.error("Ошибка при загрузке данных:", err);
            }
        };
        fetchItem();
    }, [props.url]);

    return (
        <StyledSeasonDiv>
            <Image
                src='/23feb.png'
                alt="Season Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                style={{ zIndex: -1  }}
            />
            <StyledH2>{props.mainTitle}</StyledH2>
            <StyledWrapper>
                {item?.slice(0, 4).map((item, index) => (
                    <BigCardForGame
                        imageUrl={item.thumbnail_url}
                        key={index}
                        transform={true}
                        nameGame={item.title}
                        oldPrice={item.old_price}
                        is_for_sale={item.is_for_sale}
                        newPrice={item.current_price}
                        cardType='bigCard'
                        onClick={() => handleCardClick(item.category_id, item.title, item.id)}
                        region={item.region}
                        platform={item.platform}
                    />
                ))}
            </StyledWrapper>
            <ButtonWrap>
                <ButtonStyled>
                    Смотреть все
                </ButtonStyled>
            </ButtonWrap>
        </StyledSeasonDiv>
    );
};

const StyledSeasonDiv = styled.div`
  position: relative; 
  width: 100%;
  height: 479px;
  padding-left: 34px;
  border-radius: 5px;
  margin-top: 72px;
  overflow: hidden;
 
`;

const StyledH2 = styled.h3`
  font-style: normal;
  font-weight: 1000;
  font-size: 48px;
  line-height: 56px;
  color: #FFFFFF;
  padding-top: 37px;
  position: relative; 
  z-index: 1; 
`;

const StyledWrapper = styled.div`
  margin-top: 30px;
  gap: 30px;
  display: flex;
  position: relative; 
  z-index: 1; 
`;

const ButtonWrap = styled.div`
  display: flex;
  position: relative;
  z-index: 1; 
`;

const ButtonStyled = styled.button`
  width: 149px;
  height: 49px;
  margin-top: 30px;
  background: #FF333B;
  font-weight: 900;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    transition: 0.1s ease-out;
  }
`;
