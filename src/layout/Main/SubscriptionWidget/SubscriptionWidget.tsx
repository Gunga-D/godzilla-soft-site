import "./SubscriptionWidgetStyle.css"
import SubscriptionButton from "../../../components/subscriptionButton/SubscriptionButton"
import Image from 'next/image'
import Link from "next/link"

type SubscriptionWidgetProps = {
    utm_source: string | undefined
};


export const SubscriptionWidget = (props: SubscriptionWidgetProps) => {
    let gamesQuery: { [key: string]: string } = { type: "subscription", category: "popular" }
    if (props.utm_source) {
        gamesQuery["utm_source"] = props.utm_source
    }

    return (
        <div className='SubscriptionWidget'>
            <div>
                <span style={{fontSize: '14px', color: 'white', backgroundColor: '#0078d7', padding: '2px 6px', borderRadius: '8px'}}>ВЫГОДНОЕ ПРЕДЛОЖЕНИЕ</span>
            </div>
            <div style={{marginTop: '34px'}}>
                <h1>STEAM ИГРЫ ПО ПОДПИСКЕ — ОТ 250 ₽</h1>
                <h3 className="SubscriptionWidgetDesc">🎮 Играй без ограничений. Не покупай каждую игру — просто подпишись!</h3>
            </div>
            <div className='SubscriptionWidgetFeatures'>
                <div className='SubscriptionWidgetFeature'>
                    <Image src='/icons8-games-50.png' width={25} height={25} alt='Icon of Games'></Image>
                    <div className="SubscriptionWidgetFeatureTitle">Огромное количество игр</div>
                    <Link className="SubscriptionWidgetFeatureGamesHint" href={{pathname: "/games", query: gamesQuery}}>?</Link>
                </div>
                <div className='SubscriptionWidgetFeature'><Image src='/icons8-community-50.png' width={25} height={25} alt='Icon of Accounts'></Image><div className="SubscriptionWidgetFeatureTitle">Обновляемый каталог аккаунтов</div></div>
                <div className='SubscriptionWidgetFeature'>
                    <div><Image src='/icons8-shield-50.png' width={25} height={25} alt='Icon of Security'></Image></div>
                    <div className="SubscriptionWidgetFeatureTitle">Удобство и безопасность</div>
                </div>
                <div className='SubscriptionWidgetFeature'><Image src='/icons8-clock-50.png' width={25} height={25} alt='Icon of Clock'></Image><div className="SubscriptionWidgetFeatureTitle">Играй в любое удобное время</div></div>
            </div>
            <div className='SubscriptionWidgetControls'>
                <SubscriptionButton className="SubscriptionWidgetBtn" btnText="Начать играть за 250 ₽"></SubscriptionButton>
            </div>
            <div className="SubscriptionWidgetImageContainer">
                <Image src='/SubBanner5.png' width={415} height={209} alt="Steam Subscription Banner"></Image>
            </div>
        </div>
    )
}