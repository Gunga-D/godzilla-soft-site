import Link from "next/link";
import { BaseSection } from "../BaseSection/BaseSection";
import './GamesSection.css'

type GameSectionProps = {
    utm_source: string | undefined
};

export const GamesSection = (props: GameSectionProps) => {
    let gamesKeyLinkQuery: { [key: string]: string } = { type: "key", category: "popular" }
    let gamesGiftLinkQuery: { [key: string]: string } = { type: "gift", category: "popular" }
    if (props.utm_source) {
        gamesKeyLinkQuery["utm_source"] = props.utm_source
        gamesGiftLinkQuery["utm_source"] = props.utm_source
    }

    return (
        <div className='GamesSection'>
            <div className="GamesSectionHeader">
                <h2 className="GamesSectionTitle">🎮 Игры <span style={{color: "#ffffffb2"}}>2 000+</span></h2>
                <div className="GamesSectionGameTypeContainer">
                    <div className="GamesSectionGameType">
                        <Link href={{pathname: "/games", query: gamesKeyLinkQuery}} style={{color: "white", textDecoration: "none"}}>Ключи</Link>
                    </div>
                    <div className="GamesSectionGameType">
                        <Link href={{pathname: "/games", query: gamesGiftLinkQuery}} style={{color: "white", textDecoration: "none"}}>Гифты</Link>
                    </div>
                </div>
            </div>
            <BaseSection mainTitle={"Популярные  ❯"} url={"/popular_items"} id="carousel-popular-items" utm_source={props.utm_source}/>
            <BaseSection mainTitle={"Новинки  ❯"} url={"/new_items"} id="carousel-new-items" utm_source={props.utm_source}/>
            <BaseSection mainTitle={"Со скидками  ❯"} url={"/sales_items"} id="carousel-sales-items" utm_source={props.utm_source}/>
            <BaseSection mainTitle={"Выбор редакции  ❯"} url={"/recomendation_items"} id="carousel-rec-items" utm_source={props.utm_source}/>
        </div>
    );
};