import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import SBP from '../../assets/images/Payment/sbp.png'
import MIR from '../../assets/images/Payment/mir.png'
import TBANK from '../../assets/images/Payment/tbank.png'
import {Image} from "../image/Image";
import {itemApi} from "../../common/api/item/item-api";
import {Item} from "../../common/api/item/item";
import {MediumCardForGames} from "../cardForGames/MediumCardForGames";
import {CatalogCard} from "../cardForGames/CatalogCard";
import {useNavigate, useParams} from "react-router-dom";


export const BuyPage = () => {
    const [item, setItem] = useState<Item[] | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleCardClick = (id: number | undefined) => {
        navigate(`/catalog/${id}`);
    };
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await itemApi.getItem('/recomendation_items');
                setItem(data);
            } catch (err) {
            }
        };
        fetchItem();
    }, [item]);
    return (
        <StyledDiv>
            <StyledH2 id = 'dostavka'>Доставка цифрового товара</StyledH2>
            <StyledH4>Цифровой товар будет доставлен на указанный е-mail:</StyledH4>
            <StyledInput placeholder='Введите email'/>
            <StyledP>доступные способы оплаты</StyledP>
            <PaymentWrapper>
                <StyledDivImg><Image cursor={true} src={SBP} height='41px' width='52px'/></StyledDivImg>
                <StyledDivImg><Image cursor={true} src={TBANK} height='23px' width='56px'/></StyledDivImg>
                <StyledDivImg><Image cursor={true} src={MIR} width='52px' height='16px'/></StyledDivImg>
            </PaymentWrapper>
            <StyledButton>Оплатить</StyledButton>
            <StyledSmallText>Нажимая кнопку "Оплатить", вы принимаете Договор-оферту оказания услуг и Политику конфиденциальности</StyledSmallText>
            <Popular>
                <StyledH3>Популярные</StyledH3>
                <StyledWrapper>
                    {item?.slice(0, 4).map((item, index) => (
                        <CatalogCard
                            key={index}
                            imageUrl={item.thumbnail_url}
                            cursor={true}
                            height="325px"

                            width="253px"
                            cardType="catalogCard"

                            nameGame={item.title}
                            onClick={() => handleCardClick(item.id)}
                        />
                    ))}
                </StyledWrapper>
            </Popular>
        </StyledDiv>
    );
};

const StyledDiv = styled.div `
    height: 100%; 
    margin-top: 210px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const StyledH2 = styled.h2 `
  font-style: normal;
  font-weight: 900;
  font-size: 51px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 80px;
`
const StyledH4 = styled.h4 `
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 30px;
  line-height: 150%;
  color: #FFFFFF;
`
const StyledInput = styled.input `
  width: 579px;
  height: 56px;
  background: #D9D9D9;
  opacity: 0.2;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 10px;
  margin-bottom: 50px;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;
  color: #4d4949;
`
const PaymentWrapper = styled.div `
  display: flex;
  gap: 5px;
  
`
const StyledP = styled.p `
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 25px;
  color: #FFFFFF;
`
const StyledDivImg = styled.div `
  width: 146.12px;
  height: 95.42px;
  background: #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`
const StyledButton = styled.button `
 background-color: #FF333B;
  width: 579px;
  height: 65px;
  border-radius: 5px;
  border: none;
  font-style: normal;
  font-weight: 900;
  margin-bottom: 5px;
  font-size: 36px;
  line-height: 150%;
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background-color: white;
    cursor: pointer;
    transition: 550ms;
    color: red;
  }
`
const StyledSmallText = styled.div `/* Нажимая кнопку "Оплатить", вы принимаете Договор-оферту оказания услуг и Политику конфиденциальности */

  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  width: 579px;
text-align: left;
  margin-bottom: 200px;

`
const StyledH3 = styled.h3 `
  font-style: normal;
  font-weight: 900;
  font-size: 51px;
  line-height: 150%;
  color: #FFFFFF;
text-align: left;
  margin-left: 0;
`
const Popular = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`
const StyledWrapper = styled.div `
  margin-top: 20px;
  gap: 25px;
  display: flex;
`
