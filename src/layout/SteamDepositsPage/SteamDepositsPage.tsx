"use client"

import { steamApi } from "../../common/api/steam/api";
import { useEffect, useState } from "react";

import "./SteamDepositsPageStyle.css"

export const SteamDepositsPage = () => {
    const [steamLogin, setSteamLogin] = useState<string>("");
    const [steamAmount, setSteamAmount] = useState<number>(500);
    const [price, setPrice] = useState<number>(0);
    const [err, setErr] = useState<string|null>(null);

    const calc = async () => {
      try {
          const resp = await steamApi.calc({
            amount: steamAmount,
          });
          setPrice(resp.data.price)
          setErr(null)
      } catch (err: any) {
          setErr(err.response.data.message)
          return;
      }
    };
    useEffect(() => {
      calc()
    }, [steamAmount])

    const createInvoice = async () => {
      try {
        const resp = await steamApi.createInvoice({
          steam_login: steamLogin,
          amount: steamAmount,
        });
        window.open(resp.data.payment_link, "_self");
        setErr(null)
      } catch (err: any) {
        setErr(err.response.data.message)
        return;
      }
    };

    return (
        <div className="SteamDepositsContainer">
            <h1 className="SteamDepositsH1">Пополнение баланса Steam</h1>

            <div className="SteamDepositsPageStyled">

                <div className="SteamDepositsPageStyledLeftColumn">
                    <p className="SteamDepositsPageStyledDescription">Выгодное предложение</p>
                    <p className="SteamDepositsPageStyledText">Аккаунты РФ и стран СНГ. Деньги поступят на аккаунт в течение 15 минут. В редких случаях — до 2 часов.</p>

                    <div className="SteamDepositsPageStyledSection">
                        <div className="SteamDepositsPageStyledInputContainer">
                          <input className="SteamDepositsPageStyledInput" type="text" placeholder="Введите логин Steam" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                            setSteamLogin(e.currentTarget.value)
                          }} style={{borderColor: err !== null?"red":"#a6a6a6"}}/>
                          <a href="https://store.steampowered.com/account/" className="SteamDepositsPageStyledQuestion">?</a>
                        </div>
                    </div>
                    <div className="SteamDepositsPageStyledSection">
                        <label className="SteamDepositsPageStyledLabel">Сумма пополнения, в рублях</label>
                        <div className="SteamDepositsPageStyledInputContainer">
                          <input className="SteamDepositsPageStyledInput" type="number" placeholder="500 ₽" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                            setSteamAmount(Number(e.currentTarget.value))
                          }} style={{borderColor: err !== null?"red":"#a6a6a6"}}/>
                          <p className="SteamDepositsPageStyledSmallText">От 30 ₽ до 30 000 ₽</p>
                        </div>
                    </div>
                    <div className="SteamDepositsPageStyledSection">
                      <p className="SteamDepositsPageStyledErr">{err}</p>
                    </div>
                </div>
                <div className="SteamDepositsPageStyledRightColumn">
                  <div className="SteamDepositsPageStyledSection">
                        <label className="SteamDepositsPageStyledLabel">К оплате</label>
                        <div className="SteamDepositsPageStyledPaymentDetails">
                            <div>Сумма пополнения: {steamAmount} ₽</div>
                            <div>Комиссия сервиса: {price-steamAmount} ₽</div>
                            <div>Итого: {price} ₽</div>
                        </div>
                    </div>
                    <button onClick={createInvoice} className="SteamDepositsPageStyledSubmitBtn">Оплатить {price} ₽</button>
                    <div className="SteamDepositsPageStyledFooter">
                        Нажимая "Оплатить", вы принимаете Правила пользования сайтом и Политику конфиденциальности.
                    </div>
                </div>
            </div>
        </div>
    );
};