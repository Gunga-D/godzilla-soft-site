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
                        <Link href={"/games"} style={{color: "white", textDecoration: "none"}}>Ключи</Link>
                    </div>
                    <div className="GamesSectionGameType">
                        <Link href={"/games"} style={{color: "white", textDecoration: "none"}}>Гифты</Link>
                    </div>
                </div>
            </div>
            <BaseSection mainTitle={"Популярные  ❯"} url={"/popular_items"}/>
            <BaseSection mainTitle={"Новинки  ❯"} url={"/new_items"}/>
            <BaseSection mainTitle={"Со скидками  ❯"} url={"/sales_items"}/>
            <BaseSection mainTitle={"Выбор редакции  ❯"} url={"/recomendation_items"}/>
        </div>
    );
};