import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Item} from "../../../common/api/item/item";
import {itemApi} from "../../../common/api/item/item-api";
import SeasonBackground from "../../../assets/images/SeasonSection/NewYearBanner.png"
import {BigCardForGame} from "../../../components/cardForGames/BigCardForGame";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
type SeasonSectionProps = {
    mainTitle?: string,
    url?: string,
}
export const SeasonSection = (props: SeasonSectionProps) => {
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
                                        onClick = {() => handleCardClick(item.id)}

                        />
                    ))}
                </StyledWrapper>
                <ButtonWrap>
                    <StyledLink to={'/catalog'}>
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
