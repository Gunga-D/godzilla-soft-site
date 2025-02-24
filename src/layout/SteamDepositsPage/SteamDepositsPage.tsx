import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../styles/Container";

export const SteamDepositsPage = () => {
    return (
        <Container>
            <StyledH1>Пополнение баланса Steam</StyledH1>

            <SteamDepositsPageStyled>

                <LeftColumn>
                    <StyledDescription>Выгодное предложение</StyledDescription>
                    <StyledText>Аккаунты РФ и стран СНГ. Деньги поступят на аккаунт в течение 15 минут. В редких случаях — до 2 часов.</StyledText>

                    <StyledSection>
                        <StyledInput type="text" placeholder="Введите логин Steam" />
                    </StyledSection>
                    <StyledSection>
                        <StyledLabel>Сумма пополнения, в рублях</StyledLabel>
                        <StyledInput type="number" placeholder="350 ₽" />
                        <StyledSmallText>Максимальная сумма 30000 ₽</StyledSmallText>
                    </StyledSection>
                </LeftColumn>
                <RightColumn>
                    <StyledSection>
                        <StyledLabel>К оплате</StyledLabel>
                        <StyledPaymentDetails>
                            <div>Сумма пополнения: 350 ₽</div>
                            <div>Комиссия сервиса: 50 ₽</div>
                            <div>Итого: 400 ₽</div>
                        </StyledPaymentDetails>
                    </StyledSection>
                    <StyledLink to={'/payment'}>
                        <StyledSubmitButton>Оплатить 400 ₽</StyledSubmitButton>
                    </StyledLink>
                    <StyledFooter>
                        Нажимая "Оплатить", вы принимаете <StyledLink to={'/rules'}>Правила пользования сайтом</StyledLink> и <StyledLink to={'/privacy'}>Политику конфиденциальности</StyledLink>.
                    </StyledFooter>
                </RightColumn>
            </SteamDepositsPageStyled>
        </Container>
    );
};

const SteamDepositsPageStyled = styled.div`
  display: flex;
  justify-content: space-between;
  
  color: #ffffff;
  padding: 20px;
`;

const LeftColumn = styled.div`
  width: 55%;
  text-align: left;
`;

const RightColumn = styled.div`
  width: 45%;
  margin-top: 0;
  padding-left: 60px;
  text-align: left;
`;

const StyledH1 = styled.h1`
  font-size: 55px;
text-align: left;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-top: 200px;


  color: #FF333B;
`;

const StyledDescription = styled.p`
  font-size: 30px;
  margin: 10px 0;
`;

const StyledText = styled.div`
  font-size: 17px;
  padding-bottom: 10px;
`;

const StyledSubtitle = styled.div`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const StyledSection = styled.div`
  margin: 20px 0;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  display: block;
  
`;

const StyledInput = styled.input`
  &::placeholder {
    color: #FFFFFF;
    opacity: 0.5;
  }
  width: 450px;
  height: 56px;
  background: rgba(44, 43, 43, 0.9);
  backdrop-filter: blur(3px);
  border: 2px solid #a6a6a6;
  border-radius: 5px;
  outline: none;
  color: #FFFFFF;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:focus {
    border-color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.2);
  }

`;


const StyledPaymentDetails = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 10px 0;

  div {
    &::placeholder {
      color: #FFFFFF;
      opacity: 0.5;
    }

    width: 450px;
    height: 56px;
    background: rgba(44, 43, 43, 0.9);
    backdrop-filter: blur(3px);
    border: 2px solid #a6a6a6;
    border-radius: 5px;
    outline: none;
    color: rgba(255, 255, 255, 0.84);
    padding: 10px;
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 16px;
    display: flex;
    align-items: center;
    line-height: 150%;
    transition: border-color 0.3s ease, background-color 0.3s ease;

    &:focus {
      border-color: #FFFFFF;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const StyledSubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #FF333B;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #ff4757;
  }
`;

const StyledFooter = styled.div`
  font-size: 0.9rem;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FF333B;

  &:hover {
    text-decoration: underline;
  }
`;
const StyledSmallText = styled.p `
  font-size: 13px;
`
