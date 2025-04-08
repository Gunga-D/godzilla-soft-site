import Link from "next/link";
import "./style.css"

export default function Page() {
    return (
        <div className="BlogPage">
            <h1 className="BlogHeaderTitle">Лучшие игры 2024 года от редакции GODZILLA SOFT</h1>
            <p className="BlogPublicationDate">7 апреля 2025 года</p>
            <p className="BlogAccentText">Мы собрали лучшие игры 2024 года в одном материале.</p>
            <p className="BlogPrimaryText">В данной подборке нет разбивки на категории, на платформу, все игры на любой вкус и цвет, сюда попали те игры, которые понравились нашей команде и мы бы хотели поделиться нашим мнением. Игры расставлены в порядке, который выбрал наш редактор, логике в этом можете не искать)</p>
            <p className="BlogAccentText">Лучшие игры 2024 года по нашему мнению:</p>
            <ol className="BlogList">
                <li className="BlogListItem"><a className="BlogInteractiveLink" href="#blog-warhammer-40000">Warhammer 40,000: Space Marine 2</a></li>
                <li className="BlogListItem"><a className="BlogInteractiveLink" href="#blog-wukong">Black Myth: Wukong</a></li>
                <li className="BlogListItem"><a className="BlogInteractiveLink" href="#blog-helldivers2">HellDivers 2</a></li>
                <li className="BlogListItem"><a className="BlogInteractiveLink" href="#blog-path-of-exile-2blog-path-of-exile-2">Path of Exile 2</a></li>
            </ol>
            <div className="BlogEmbeddedContent">
                <h3 className="BlogEmbeddedContentTitle">Как купить все эти игры в России?</h3>
                <p className="BlogEmbeddedContentDescription">Некоторые игры из этого списка, к примеру, <b>HellDivers 2</b> невозможно купить в РФ регионе Стима. Для того, чтобы облегчить поиск, мы к каждому тайтлу оставили ссылку на товар нашего сайта, где вы легко и дешево сможете приобрести данную игру и насладиться ей.</p>
            </div>
            <div className="BlogContent" id="blog-warhammer-40000">
                <h2 className="BlogContentTitle">Warhammer 40,000: Space Marine 2</h2>
                <p className="BlogContentParagraph"><b>Кратко:</b> Игра шедевр! 12 Императоров из 10!</p>
                <p className="BlogContentParagraph"><b>Дата выхода:</b> 9 сентября</p>
                <p className="BlogContentParagraph"><b>Разработчик:</b> Saber Interactive. Тут нужно подчернуть то, что сама компания состоит из большего количества наших питерских соотечественник, что добавляет количество баллов в копилку игры</p>
                <p className="BlogContentParagraph"><b>Издатель:</b> Focus Home Interactive</p>
                <img className="BlogContentImage" src="/01J7BF09Q8N54FBZ4E2XXFXWWC.jpg"></img>
                <p className="BlogContentParagraph">Игра просто <b>шедевр</b>, не побоимся даже сказать, что это лучший представитель из жанра <b>слэшер-экшенов</b>, без ненужных засоряющих геймплейных механик. Прямолинейный и логичный сюжет с понятным нарративом с нотками ВАХОВСКОГО пафоса, сюжет слегка короткий, но, возможно, это даже можно считать плюсом, так как за тот промежуток времени ты просто не успеваешь устать в бесконечных баталиях.</p>
                <p className="BlogContentParagraph">Наша мнение - берите кореша и ныряйте в мир космодесантников, по пути выкашивая ксеновскую погань и хаоситское отребье. <b>За императора!</b></p>
                <Link href="/games/Warhammer_40,000:_Space_Marine_2_290" className="BlogItemBuyButton">Купить</Link>
            </div>
            <div className="BlogContent" id="blog-wukong">
                <h2 className="BlogContentTitle">Black Myth: Wukong</h2>
                <p className="BlogContentParagraph"><b>Кратко:</b> Отличная игра, пополнили всей командой знания в китайской мифологии</p>
                <p className="BlogContentParagraph"><b>Дата выхода:</b> 20 августа</p>
                <p className="BlogContentParagraph"><b>Разработчик:</b> Game Science</p>
                <p className="BlogContentParagraph"><b>Издатель:</b> Game Science</p>
                <img className="BlogContentImage" src="/my9kN4mfwjGLnyS7cJP9pA.webp"></img>
                <p className="BlogContentParagraph">Тут китайца очень круто постарались, сделали на основе своего классического романа «Путешествие на Запад» солслайк игру. В первую очередь игра цепляет своей проработанностью, видна кропотливая работа разработчиков, а также их уважительное и щепетильное отношение к фольклору, выраженное в сюжетном повествовании, разнообразии, детализации локаций (в том числе скрытых) и игровых механик, качественной и плавной анимации, интересных боссах.</p>
                <p className="BlogContentParagraph">Наша мнение - восхитительная сюжетная игра, один скажет Игра Года, миллионы ответят Wukong!</p>
                <Link href="/games/Black_Myth:_Wukong_266" className="BlogItemBuyButton">Купить</Link>
            </div>
            <div className="BlogContent" id="blog-helldivers2">
                <h2 className="BlogContentTitle">HellDivers 2</h2>
                <p className="BlogContentParagraph"><b>Кратко:</b> Игра, которая ставит геймплей во главу стола</p>
                <p className="BlogContentParagraph"><b>Дата выхода:</b> 8 февраля</p>
                <p className="BlogContentParagraph"><b>Разработчик:</b> Arrowhead Game Studios</p>
                <p className="BlogContentParagraph"><b>Издатель:</b> Sony Interactive Entertainment</p>
                <img className="BlogContentImage" src="/helldivers2blog.webp"></img>
                <p className="BlogContentParagraph">HellDivers 2 - это весело, круто, задорно, здесь нет какого-то сложного сюжета, запоминающихся персонажей, в первую очередь разработчики сделали упор на геймплейные механики и игровой опыт. Игра будто затягивает в пучину веселья, так она затянула и нас, именно поэтому сайт выходил чуть больше времени, чем планировалось.</p>
                <p className="BlogContentParagraph">Наша мнение - собирайте команду из 4 своих друзей и несите <b>демократию</b> в массы!</p>
                <Link href="/games/Warhammer_40,000:_Space_Marine_2_290" className="BlogItemBuyButton">Купить</Link>
            </div>
            <div className="BlogContent" id="blog-path-of-exile-2" style={{marginBottom: "0"}}>
                <h2 className="BlogContentTitle">Path of Exile 2</h2>
                <p className="BlogContentParagraph"><b>Кратко:</b> Любителям жанра диаблойда очень зайдет</p>
                <p className="BlogContentParagraph"><b>Дата выхода:</b> 6 декабря</p>
                <p className="BlogContentParagraph"><b>Разработчик:</b> Grinding Gear Games</p>
                <p className="BlogContentParagraph"><b>Издатель:</b> Grinding Gear Games</p>
                <img className="BlogContentImage" src="/Path-of-Exile-2-rog-ally-game-settings.webp"></img>
                <p className="BlogContentParagraph">С первого взгляда игра выглядит как «Diablo на стероидах» – ещё больше безумной прокачки, кровавых дропов и сложных механик. Но это не так! В отличие от Diablo - Path of Exile 2 создает глобальный вызов игроку, любой этап, любое достижение цели происходит через боль и страдания. И это прекрасно!</p>
                <p className="BlogContentParagraph">Наша оценка - заводчанам зайдет, после тяжёлого дня на монотонной и рутинной работе, заводчанин идет на вторую работу, добывать сферы возвышения! Ибо только сильная рыба может плыть против течения!</p>
                <Link href="/games/Path_of_Exile_2_276" className="BlogItemBuyButton">Купить</Link>
            </div>
        </div>
    );
}
