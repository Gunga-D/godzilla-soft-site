import Image from 'next/image'
import './IntroductionBannersStyle.css'
import Link from 'next/link'

export const IntroductionBanners = () => {
    return (
        <div className='IntroductionBannersContainer'>
            <div className='IntroductionBannersItem'>
                <Image className='IntroductionBannersItemImage' src={"/TelegramLogo.png"} alt='TelegramLogo' height={150} width={150}></Image>
                <h2 className='IntroductionBannersItemTitle'>Конкурсы и <span style={{color: "#ff333b"}}>промокоды</span></h2>
                <p className='IntroductionBannersItemDescription'>Только в нашем телеграмм канале, новости из индустрии и очень много плюшек</p>
                <Link href={"https://t.me/godzillasoftmedia"}>
                    <button className='IntroductionBannersItemButton'>Узнать подробнее</button>
                </Link>
            </div>
            <div className='IntroductionBannersItem'>
            <Image className='IntroductionBannersItemImage' src={"/YandexMarketLogo.png"} alt='YandexMarketLogo' height={120} width={120}></Image>
                <h2 className='IntroductionBannersItemTitle'>Мы есть на <span style={{color: "#fc5424"}}>Яндекс</span> <span style={{color: "#ffdd04"}}>Маркете</span></h2>
                <p className='IntroductionBannersItemDescription'>Более <span style={{color: "#ff333b"}}><b>1 827</b></span> отзывов от наших клиентов со средней оценкой&nbsp;<span style={{color: "#ff333b"}}><b>4.8</b></span>&nbsp;⭐</p>
                <Link href={"https://market.yandex.ru/store--godzilla-soft?businessId=139719541"}>
                    <button className='IntroductionBannersItemButton' style={{marginTop: "15px"}}>Перейти</button>
                </Link>
            </div>
        </div>
    )
}