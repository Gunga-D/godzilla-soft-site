import Link from "next/link";
import "./style.css"

export default function Page() {
    return (
        <div className="BlogMainContainer">
            <h1 className="BlogMainTitle">Наш блог</h1>
            <div className="BlogMainListOfBlogsContainer">
                <div className="BlogMainListItem">
                    <Link href={"/blog/zelenie-magazin-ili-stoit-li-pokupat-lizenzirovanie-igri"} style={{textDecoration: "none"}}>
                        <img src="/pirates-piracy-torrent-torrent-wallpaper-preview.jpg" className="BlogMainListItemImage"></img>
                        <p className="BlogMainListItemDate">9 апреля 2025 года</p>
                        <h2 className="BlogMainListItemTitle">Зеленый магазин и его подводные</h2>
                    </Link>
                </div>
                <div className="BlogMainListItem">
                    <Link href={"/blog/luchshie-igri-2024-goda"} style={{textDecoration: "none"}}>
                        <img src="/EGS_Warhammer40000SpaceMarine2_SaberInteractive_S1_2560x1440-975214651d1d1bc6c6e5779b53958840.jpeg" className="BlogMainListItemImage"></img>
                        <p className="BlogMainListItemDate">7 апреля 2025 года</p>
                        <h2 className="BlogMainListItemTitle">Лучшие игры по мнению GODZILLA SOFT</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}
