import { Metadata } from "next";
import WheelSpinner from "../../components/wheelSpinner/WheelSpinner";
import "./style.css"

export const metadata: Metadata = {
    title: 'Случайная Steam игра | GODZILLASOFT',
    description: 'Испытай свою удачу на сайте цифровых товаров GODZILLA SOFT и выиграй одну игру Steam из более 400 других',
    openGraph: {
        url: "/random",
        images: "/og_favicon_random.png" ,
    },
}

interface Game {
    name: string;
    image: string;
}

const games: Game[] = [
    { name: 'DOOM Eternal', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/capsule_231x87.jpg?t=1702308063' },
    { name: "Punch Club", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394310/capsule_231x87.jpg?t=1745397193"}, 
    { name: 'ELDEN RING', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_231x87.jpg?t=1744748041' },
    { name: 'Ready or Not', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1144200/capsule_231x87.jpg?t=1747153161' },
    { name: 'Metro Exodus', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412020/capsule_231x87.jpg?t=1725363713' },
    { name: "Besiege", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346010/c0baf8adef0b0c7221d0dc1a0ea7672554d6fa21/capsule_231x87.jpg?t=1739810419"},
    { name: 'Days Gone', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1259420/capsule_231x87.jpg?t=1746207981' },
    { name: 'Mortal Kombat 11', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/capsule_231x87.jpg?t=1747925751' },
    { name: "Love Money", image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/615530/capsule_231x87_russian.jpg?t=1739455124'},
    { name: "Dark Souls 3", image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/capsule_231x87.jpg?t=1733509027'},
    { name: "Party Hard", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/356570/capsule_231x87.jpg?t=1739395561"},
    { name: "Heavy Rain", image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/960910/capsule_184x69.jpg?t=1675271942'},
    { name: "Frostpunk 2", image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1601580/2c5b053c630a9cb57fa71e6eb018c2a0b008c05b/capsule_231x87.jpg?t=1747838679'},
    { name: "Hotline Miami 2", image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/274170/capsule_231x87.jpg?t=1728687900'},
    { name: "Alan Wake", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108710/capsule_231x87.jpg?t=1726554283"},
    { name: "No Mans Sky", image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/c56896aed2f8277878b108ecf908067017e7137d/capsule_231x87.jpg?t=1742997746'},
];

export default function Random() {
    return (
        <div className="RandomGamePage">
            <h1 className="RandomGamePageTitle">🎲 СЛУЧАЙНАЯ ИГРА STEAM</h1>
            <h3 className="RandomGamePageDescription">Крути барабан и забирай игру по более выгодной цене</h3>
            <WheelSpinner></WheelSpinner>
            <div className="RandomGamePagePrizes">
                <h3 className="RandomGamePagePrizesTitle">Крути барабан и выиграй один из призов</h3>
                <div className="RandomGamePagePrizesList">
                    {games.map((game, index) => (
                        <div className="RandomGamePagePrizeItem" key={index}>
                            <img src={game.image} className='RandomGamePagePrizeItemImage'></img>
                        </div>
                    ))}
                </div>
                <div className="RandomGamePagePrizesPostfix">И еще 384 игры</div>
            </div>
        </div>
    );
}