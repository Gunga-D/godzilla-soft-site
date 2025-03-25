import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import SBP from '../../assets/images/Payment/sbp.png';
import MIR from '../../assets/images/Payment/mir.png';
import TBANK from '../../assets/images/Payment/tbank.png';
import { ImageComponent } from "../image/Image";
import { itemApi } from "../../common/api/item/item-api";
import { CreateOrder } from '../../common/api/item/item';
import { Item } from "../../common/api/item/item";
import { CatalogCard } from "../cardForGames/CatalogCard";
import { transliterate } from '../../hooks/transliterate';
import Image from "next/image";

type BuyPageProps = {
  itemID?: any,
  title?: string,
  description?: string,
}

export const BuyPage = (props: BuyPageProps) => {
    const [item, setItem] = useState<Item[] | null>(null);
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    // const values = value?.split("_")
    let itemID = props.itemID
    // if (!itemID && values !== undefined) {
    //   itemID = values[values.length-1]
    // }


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
      // navigate(`/${catalogPath}/${itemName?.replaceAll(" ", "_")}_${itemId}`);
  };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setError(null);
    };

    const handlePayment = () => {
        if (!itemID) {
          setError('Товар не выбран');
          return;
        }
        if (!email.trim()) {
            setError('Пожалуйста, введите email');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Пожалуйста, введите корректный email');
            return;
        }

        const createOrder = async () => {
            let data: CreateOrder;
            try {
                data = await itemApi.createOrder(Number(itemID), email);
            } catch (err) {
                const errorMessage = getErrorMessage(err);
                setError(errorMessage);
                return;
            }
            window.open(data.payment_link, "_self");
        };

        const buyItem = async () => {
            try {
                await itemApi.cartItem(Number(itemID));
            } catch (err) {
                const errorMessage = getErrorMessage(err);
                setError(errorMessage);
                return;
            }
            createOrder();
        };
        buyItem();
    };

    const getErrorMessage = (err: unknown): string => {
        if (typeof err === 'string') {
            return err;
        } else if (err instanceof Error) {
            return err.message;
        } else if (err && typeof err === 'object' && 'message' in err) {
            return String(err.message);
        }
        return 'Произошла неизвестная ошибка';
    };    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await itemApi.getItem('/recomendation_items');
                setItem(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchItem();
    }, [itemID]);

    return (
        <StyledDiv>
            <StyledH2 id='dostavka'>{props.title || "Оформление заказа"}</StyledH2>
            <StyledH4>{props.description || "Цифровой товар будет доставлен на указанный е-mail:"}</StyledH4>
            <StyledInput
                placeholder='Введите email'
                value={email}
                onChange={handleEmailChange}
            />
            {error && <StyledError>{error}</StyledError>}
            <StyledP>доступные способы оплаты</StyledP>
            <PaymentWrapper>
                <StyledDivImg><Image alt='СБП' src={SBP} height={41} width={52} /></StyledDivImg>
                <StyledDivImg><Image alt='Тинькофф' src={TBANK} height={23} width={56} /></StyledDivImg>
                <StyledDivImg><Image alt='МИР'  src={MIR} width={52} height={16} /></StyledDivImg>
            </PaymentWrapper>
            <StyledButton onClick={handlePayment}>Оплатить</StyledButton>
            <StyledSmallText>Нажимая кнопку "Оплатить", вы принимаете Договор-оферту оказания услуг и Политику конфиденциальности</StyledSmallText>
            <Popular>
                <StyledH3>Популярные</StyledH3>
                <StyledWrapper>
                    {item?.slice(0, 4).map((item, index) => (
                        <CatalogCard
                            key={item.id}
                            newPrice={item.current_price}
                            oldPrice={item.old_price}
                            imageUrl={item.thumbnail_url}
                            is_for_sale={item.is_for_sale}
                            cardType="catalogCard"
                            nameGame={item.title}
                            onClick={() => handleCardClick(item.category_id, item.title, item.id)}
                            platform={item.platform}
                            region={item.region}
                        />
                    ))}
                </StyledWrapper>
            </Popular>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
  height: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 51px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 80px;
`;

const StyledH4 = styled.h4`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 30px;
  line-height: 150%;
  color: #FFFFFF;
`;

const StyledInput = styled.input`
  &::placeholder {
    color: #FFFFFF;
    opacity: 0.5;
  }

  width: 579px;
  height: 56px;
  background: rgba(44, 43, 43, 0.9);
  backdrop-filter: blur(3px);
  border: 2px solid #a6a6a6;
  border-radius: 5px;
  outline: none;
  color: #FFFFFF;
  padding: 10px;
  margin-bottom: 50px;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:focus {
    border-color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.2); 
  }

`;

const PaymentWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledP = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 25px;
  color: #FFFFFF;
`;

const StyledDivImg = styled.div`
  width: 146.12px;
  height: 95.42px;
  background: #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

const StyledButton = styled.button`
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
`;

const StyledSmallText = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  width: 579px;
  text-align: left;
  margin-bottom: 100px;
`;

const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 900;
  font-size: 51px;
  line-height: 150%;
  color: #FFFFFF;
  text-align: left;
  margin-left: 0;
`;

const Popular = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledWrapper = styled.div`
  margin-top: 20px;
  gap: 25px;
  display: flex;
  img {
    object-fit: contain;
  }
  
`;

const StyledError = styled.div`
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
    margin-top: -30px;
`;

