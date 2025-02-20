import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Item} from "../../../common/api/item/item";
import {itemApi} from "../../../common/api/item/item-api";
import SeasonBackground from "../../../assets/images/SeasonSection/23feb.png"
import {BigCardForGame} from "../../../components/cardForGames/BigCardForGame";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { transliterate } from '../../../hooks/transliterate';

type SeasonSectionProps = {
    mainTitle?: string,
    url?: string,
}
export const SeasonSection = (props: SeasonSectionProps) => {
    const [item, setItem] = useState<Item[] | null>(null);
    const navigate = useNavigate();
    const handleCardClick = (categoryID: number | undefined, itemName: string | undefined, itemId: number | undefined) => {
      let catalogPath = ""
      switch (categoryID) {
          case 10001:
              catalogPath = "games"
              break
          case 10002:
              catalogPath = "subscriptions"
              break
          case 10004:
              catalogPath = "deposits"
              break
      }
      itemName = transliterate(itemName!)
      navigate(`/${catalogPath}/${itemName?.replaceAll(" ", "_")}_${itemId}`);
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
                <StyledH2>{props.mainTitle}</StyledH2>
                <StyledWrapper>
                    {item?.slice(0, 4).map((item, index) => (
                        <BigCardForGame height={'239px'}
                                        width={'239px'}
                                        imageUrl={item.thumbnail_url}
                                        key={index}
                                        transform={true}
                                        nameGame={item.title}
                                        oldPrice={item.old_price}
                                        is_for_sale={item.is_for_sale}
                                        newPrice={item.current_price}
                                        cardType='bigCard'
                                        onClick = {() => handleCardClick(item.category_id, item.title, item.id)}
                                        region={item.region}
                                        platform={item.platform}

                        />
                    ))}
                </StyledWrapper>
                <ButtonWrap>
                    <StyledLink to={'/games'}>
                    <ButtonStyled>

                            Смотреть все

                    </ButtonStyled>
                    </StyledLink>
                </ButtonWrap>
            </StyledSeasonDiv>
    );
};
const StyledSeasonDiv = styled.div `
  width: 100%;
  object-fit: contain;
  height: 479px;
  padding-left: 34px;
  border-radius: 5px;
  margin-top: 72px;
  background-image: url("${SeasonBackground}");
`
const StyledH2 = styled.h3 `
  font-style: normal;
  font-weight: 1000;
  font-size: 48px;
  line-height: 56px;
  color: #FFFFFF;
  padding-top: 37px;
`
const StyledWrapper = styled.div `
  margin-top: 30px;
  gap: 30px;
  display: flex;
`
const ButtonWrap = styled.div `
  display: flex;
`
const ButtonStyled = styled.button `
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
`

const StyledLink = styled(Link)`
  text-decoration: none;  
  color: white;
`;
