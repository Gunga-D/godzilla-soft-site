import Image from 'next/image'
import './NeuroHeaderStyle.css'
import Link from 'next/link'
import { addUTM } from '../../../hooks/utm';

type NeuroHeaderProps = {
    utm_source: string | undefined
};

export const NeuroHeader = (props: NeuroHeaderProps) => {
    return (
        <div className='NeuroHeader'>
            <div style={{fontSize: '14px', color: 'gray'}}>Более 1000 довольных клиентов</div>
            <div style={{marginTop: '34px'}}>
                <h1>НЕ ЗНАЕТЕ ВО ЧТО СЫГРАТЬ?<br/><span style={{fontSize: '18px'}}>МЫ ПОМОЖЕМ С ПОМОЩЬЮ НАШЕЙ <span style={{color: '#ff333b'}}>НЕЙРОСЕТИ</span></span></h1>
            </div>
            <div className='NeuroHeaderFeatures'>
                <div className='NeuroHeaderFeature'>
                    <div><Image src='/icons8-adaptation-64.png' width={32} height={32} alt='Icon of Adaptaion'></Image></div>
                    <div>Адаптируемость под каждого клиента</div>
                </div>
                <div className='NeuroHeaderFeature'><Image src='/icons8-price-50.png' width={32} height={32} alt='Icon of Price'></Image><div>Возможность приобрести игру прямо внутри сервиса</div></div>
                <div className='NeuroHeaderFeature'><Image src='/icons8-elements-100.png' width={32} height={32} alt='Icon of Catalog'></Image><div>Обновляемый список игр, который используется в подборе</div></div>
                <div className='NeuroHeaderFeature'><Image src='/icons8-spring-in-motion-90.png' width={32} height={32} alt='Icon of spring'></Image><div>Гибкий поиск по вашему индивидуальному запросу</div></div>
            </div>
            <div className='NeuroHeaderControls'>
                <Link href={addUTM("/suggest", props.utm_source)} className='NeuroHeaderControlsBtn'>Открыть нейропоиск</Link>
            </div>
            <div className='NeuroHeaderImageContainer'>
                    <div className="NeuroHeaderImageGifAnimation">
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/3097560/7fbfe59b8014e68215cb9e021028be2dcc84e81b/ss_7fbfe59b8014e68215cb9e021028be2dcc84e81b.jpg?t=1741802069)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/3097560/library_600x900.jpg?t=1741802069" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Liar's Bar</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/2694490/3b136a89cd7b1f5cadbb8d606567c2e91eca4255/ss_3b136a89cd7b1f5cadbb8d606567c2e91eca4255.jpg?t=1745801545)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/2694490/library_600x900.jpg?t=1745801545" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Path of Exile 2</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1086940/ss_c73bc54415178c07fef85f54ee26621728c77504.jpg?t=1744744220)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1086940/library_600x900.jpg?t=1744744220" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Baldur's Gate 3</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/899770/ss_3d0b726afdabc5b741065fab2ca45516c92e5189.jpg?t=1744905836)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/899770/4250de54563cc5cf7310840dbf531f6c563dccf3/library_600x900.jpg?t=1744905836" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Last Epoch</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.jpg?t=1720558643)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1174180/library_600x900.jpg?t=1720558643" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Red Dead Redemption 2</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.jpg?t=1711128146)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/413150/library_600x900.jpg?t=1711128146" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Stardew Valley</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.jpg?t=1731252354)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/105600/library_600x900.jpg?t=1731252354" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Terraria</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/3097560/7fbfe59b8014e68215cb9e021028be2dcc84e81b/ss_7fbfe59b8014e68215cb9e021028be2dcc84e81b.jpg?t=1741802069)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/3097560/library_600x900.jpg?t=1741802069" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Liar's Bar</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/2694490/3b136a89cd7b1f5cadbb8d606567c2e91eca4255/ss_3b136a89cd7b1f5cadbb8d606567c2e91eca4255.jpg?t=1745801545)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/2694490/library_600x900.jpg?t=1745801545" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Path of Exile 2</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1086940/ss_c73bc54415178c07fef85f54ee26621728c77504.jpg?t=1744744220)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1086940/library_600x900.jpg?t=1744744220" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Baldur's Gate 3</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/899770/ss_3d0b726afdabc5b741065fab2ca45516c92e5189.jpg?t=1744905836)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/899770/4250de54563cc5cf7310840dbf531f6c563dccf3/library_600x900.jpg?t=1744905836" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Last Epoch</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.jpg?t=1720558643)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1174180/library_600x900.jpg?t=1720558643" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Red Dead Redemption 2</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.jpg?t=1711128146)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/413150/library_600x900.jpg?t=1711128146" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Stardew Valley</div>
                            </div>
                        </div>
                        <div className="NeuroHeaderImageGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.jpg?t=1731252354)"}}>
                            <div className="NeuroHeaderImageGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/105600/library_600x900.jpg?t=1731252354" className="NeuroHeaderImageGifAnimationElementImage"></img>
                            </div>
                            <div className="NeuroHeaderImageGifAnimationElementContentContainer">
                                <div className="NeuroHeaderImageGifAnimationElementContentName">Terraria</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}