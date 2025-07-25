"use client"

import Image from "next/image";
import "./style.css"
import Link from "next/link";
import { useState } from "react";
import { deepthinkApi } from "../../common/api/deepthink/api";
import { ThinkResultDTO } from "../../common/api/deepthink/types";
import { generateItemPath } from "../../hooks/links";
import { useUser } from "../../common/context/user-context";
import RequiredAuthButton from "../../components/requiredAuthButton/RequiredAuthButton";
import { addUTM } from "../../hooks/utm";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const {user} = useUser()

    const searchParams = useSearchParams()
    const utm_source = searchParams.get('utm_source')

    let gamesGiftLinkQuery: { [key: string]: string } = { type: "gift", category: "popular" }
    if (utm_source) {
        gamesGiftLinkQuery["utm_source"] = utm_source
    }

    const [query, setQuery] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const [thinkResult, setThinkResult] = useState<ThinkResultDTO | null>(null)
    const createThinkTask = () => {
        setLoading(true)

        const think = async () => {
            try {
                const data = await deepthinkApi.think(query);
                var timer = setInterval(async function() {
                        try {
                            const thinkResultData = await deepthinkApi.getThinkResult(data.data.id)
                            setThinkResult(thinkResultData.data)
                            setLoading(false)
                            clearInterval(timer);
                        } catch (e) {
                            console.log("error to send request")
                        }
                }, 1000);
            } catch (err: any) {
                return;
            }
        };
        think()
    }
    
    return (
        <div className="Suggest">
            {thinkResult && (
                <div className="SuggestResultContainer">
                    <div className="SuggestQueryMessageContainer">
                        <p className="SuggestResultMessage" style={{marginLeft: 'auto'}}>{query}</p>
                    </div>
                    <div className="SuggestResultMessageContainer">
                        <Image alt="GodzillaSoft" src={"/SquareLogo.png"} width={35} height={35} className="SuggestResultMsgAvatar"></Image>
                        <p className="SuggestResultMessage">{thinkResult.reflection}</p>
                    </div>
                    <div className="SuggestItemsContainer">
                        {thinkResult.items.map((game, idx) => (
                            <a target="_blank" rel="noopener noreferrer" key={idx} className="SuggestItem" href={addUTM(generateItemPath(game.category_id, game.title, game.id), utm_source)}>
                                <div>
                                    <img
                                        src={game.horizontal_image}
                                        width={209}
                                        height={98}
                                        style={{ borderRadius: '10px' }}
                                        alt={game.title}
                                    />
                                </div>
                                <div>
                                    <div style={{ marginLeft: '25px'}}>
                                        <p className={'SuggestItemTitle'}>{game.title || 'Без названия'}</p>
                                        <p className={'SuggestItemPrice'}>{game.current_price}</p>
                                    </div>
                                    <div className='SuggestItemGenres'>
                                        {game.genres?.slice(0, 2).map((v, idx) => (
                                            <div key={idx} className='SuggestItemGenre'>
                                                {v}
                                            </div>
                                        ))}
                                    </div>
                                    <p className='SuggestItemType'>Отправим {game.type=="gift"?"подарком":"ключом"}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="SuggestRepeatBtnContainer">
                        <button className="SuggestRepeatBtn" onClick={()=>setThinkResult(null)}>Повторить</button>
                    </div>
                </div>
            )}
            {loading && (
                <div className="SuggestLoaderContainer">
                    <span className="SuggestLoader"></span>
                    <p className="SuggestLoaderText">Собираем рекомендации...</p>
                </div>
            )}
            {(!loading && !thinkResult) && (
                <div className="SuggestIntro">
                    <div className="SuggestHeader">
                        <div className="SuggestLogoContainer">
                            <Image alt="GodzillaSoft" src={"/SquareLogo.png"} width={50} height={50}></Image>
                        </div>
                        <h1 className="SuggestTitle">Привет, друг!</h1>
                    </div>
                    <h2 className="SuggestDesc">Я нейронка, которая поможет тебе с выбором игры.</h2>
                    <h2 className="SuggestDesc">Давай начнем, во что сегодня сыграем?</h2>
                    {!user && (
                        <div className="SuggestSearchContainer">
                            <div>
                                <p className="SuggestSearchHint">Войдите или зарегистрируйтесь, чтобы пользоваться данной функцией</p>
                                <RequiredAuthButton></RequiredAuthButton>
                            </div>
                        </div>
                    )}
                    {user && (
                        <div className="SuggestSearchContainer">
                            <div className="SuggestSearchInnerWrapper">
                                <textarea className="SuggestSearchInput" rows={2} placeholder="Напиши свой запрос" onChange={(v) => setQuery(v.target.value)} onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        if (query !== "") {
                                            createThinkTask();
                                        }
                                    }
                                }}></textarea>
                            </div>
                            <div className="SuggestSearchFooterInnerWrapper">
                                <Link href={addUTM("/", utm_source)} className="SuggestSearchToMainLink">Главная</Link>
                                <Link href={{pathname: "/games", query: gamesGiftLinkQuery}} className="SuggestSearchToMainLink">Каталог</Link>
                                <div className="SuggestSearchSendButtonContainer">
                                    <button className="SuggestSearchSendButton" onClick={createThinkTask} style={{backgroundColor: query != ""?"white":"rgb(113 113 122)"}}><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7 16c-.595 0-1.077-.462-1.077-1.032V1.032C5.923.462 6.405 0 7 0s1.077.462 1.077 1.032v13.936C8.077 15.538 7.595 16 7 16z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M.315 7.44a1.002 1.002 0 0 1 0-1.46L6.238.302a1.11 1.11 0 0 1 1.523 0c.421.403.421 1.057 0 1.46L1.838 7.44a1.11 1.11 0 0 1-1.523 0z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.685 7.44a1.11 1.11 0 0 1-1.523 0L6.238 1.762a1.002 1.002 0 0 1 0-1.46 1.11 1.11 0 0 1 1.523 0l5.924 5.678c.42.403.42 1.056 0 1.46z" fill="currentColor"></path></svg></button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>  
            )}
        </div>
    );
}