import Link from "next/link";
import { BaseSection } from "../BaseSection/BaseSection";
import './GamesSection.css'

export const GamesSection = () => {
    return (
        <div className='GamesSection'>
            <div className="GamesSectionHeader">
                <h2 className="GamesSectionTitle">🎮 Игры <span style={{color: "#ffffffb2"}}>2 000+</span></h2>
                <div className="GamesSectionGameTypeContainer">
                    <div className="GamesSectionGameType">
                        <Link href={{pathname: "/games", query: {"subcatalog": "key"}}} style={{color: "white", textDecoration: "none"}}>Ключи</Link>
                    </div>
                    <div className="GamesSectionGameType">
                        <Link href={{pathname: "/games", query: {"subcatalog": "gift"}}} style={{color: "white", textDecoration: "none"}}>Гифты</Link>
                    </div>
                </div>
            </div>
            {/* @ts-expect-error Server Component */}
            <BaseSection mainTitle={"Популярные  ❯"} url={"/popular_items"} id="carousel-popular-items"/>
            {/* @ts-expect-error Server Component */}
            <BaseSection mainTitle={"Новинки  ❯"} url={"/new_items"} id="carousel-new-items"/>
            {/* @ts-expect-error Server Component */}
            <BaseSection mainTitle={"Со скидками  ❯"} url={"/sales_items"} id="carousel-sales-items"/>
            {/* @ts-expect-error Server Component */}
            <BaseSection mainTitle={"Выбор редакции  ❯"} url={"/recomendation_items"} id="carousel-rec-items"/>
        </div>
    );
};