import Link from "next/link";
import { collectionsApi } from "../../../../common/api/collections/collections-api";
import { getIdFromPath } from "../../../../hooks/links";
import { CollectionItems } from "../../../../layout/Collection/Items/Items";
import "./style.css"
import { addUTM } from "../../../../hooks/utm";

type PageParams = Promise<{ value: string }>;

export default async function Page({ params, searchParams }: { params: PageParams, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const { value } = await params;
    const collectionID = getIdFromPath(value);

    const collection = await collectionsApi.collectionDetails(Number(collectionID))

    if (!collectionID) {
        return (
            <div>
                <h1>Данный коллекции не существует</h1>
            </div>
        );
    }

    const queries = (await searchParams)

    return (
        <div className="CollectionPageContainer">
            <div className="CollectionHeader">
                <div className="CollectionHeaderImage" style={{backgroundImage: `url(${collection.header_image}`}}></div>
                <div className="CollectionHeaderDetails">
                    <h1 className="CollectionHeaderName">{collection.name}</h1>
                    <p className="CollectionHeaderDescription" dangerouslySetInnerHTML={{
                        __html: collection.description
                    }}></p>
                </div>
            </div>
            <Link className="CollectionNeuroBanner" href={addUTM("/suggest", queries.utm_source)}>
                <div className="CollectionNeuroBannerInnerContent">
                    <div style={{fontWeight: '700', fontSize: '22px', lineHeight: '1.2', color: 'white'}}>Нейронка поможет в поиске игр</div>
                    <div style={{fontWeight: '300', fontSize: '19px', lineHeight: '1.2', color: 'white'}}>Нажмите, чтобы открыть нейропоиск игр по вашим предпочтениям</div>
                </div>
                <div className="CollectionNeuroBannerGif">
                    <div className="CollectionNeuroBannerGifAnimation">
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/3097560/7fbfe59b8014e68215cb9e021028be2dcc84e81b/ss_7fbfe59b8014e68215cb9e021028be2dcc84e81b.jpg?t=1741802069)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/3097560/library_600x900.jpg?t=1741802069" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Liar's Bar</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/2694490/3b136a89cd7b1f5cadbb8d606567c2e91eca4255/ss_3b136a89cd7b1f5cadbb8d606567c2e91eca4255.jpg?t=1745801545)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/2694490/library_600x900.jpg?t=1745801545" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Path of Exile 2</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1086940/ss_c73bc54415178c07fef85f54ee26621728c77504.jpg?t=1744744220)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1086940/library_600x900.jpg?t=1744744220" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Baldur's Gate 3</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/899770/ss_3d0b726afdabc5b741065fab2ca45516c92e5189.jpg?t=1744905836)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/899770/4250de54563cc5cf7310840dbf531f6c563dccf3/library_600x900.jpg?t=1744905836" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Last Epoch</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.jpg?t=1720558643)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1174180/library_600x900.jpg?t=1720558643" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Red Dead Redemption 2</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.jpg?t=1711128146)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/413150/library_600x900.jpg?t=1711128146" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Stardew Valley</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.jpg?t=1731252354)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/105600/library_600x900.jpg?t=1731252354" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Terraria</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/3097560/7fbfe59b8014e68215cb9e021028be2dcc84e81b/ss_7fbfe59b8014e68215cb9e021028be2dcc84e81b.jpg?t=1741802069)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/3097560/library_600x900.jpg?t=1741802069" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Liar's Bar</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/2694490/3b136a89cd7b1f5cadbb8d606567c2e91eca4255/ss_3b136a89cd7b1f5cadbb8d606567c2e91eca4255.jpg?t=1745801545)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/2694490/library_600x900.jpg?t=1745801545" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Path of Exile 2</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1086940/ss_c73bc54415178c07fef85f54ee26621728c77504.jpg?t=1744744220)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1086940/library_600x900.jpg?t=1744744220" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Baldur's Gate 3</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/899770/ss_3d0b726afdabc5b741065fab2ca45516c92e5189.jpg?t=1744905836)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/899770/4250de54563cc5cf7310840dbf531f6c563dccf3/library_600x900.jpg?t=1744905836" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Last Epoch</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.jpg?t=1720558643)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1174180/library_600x900.jpg?t=1720558643" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Red Dead Redemption 2</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.jpg?t=1711128146)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/413150/library_600x900.jpg?t=1711128146" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Stardew Valley</div>
                            </div>
                        </div>
                        <div className="CollectionNeuroBannerGifAnimationElement" style={{backgroundImage: "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgb(0, 0, 0) 92.5%), url(https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.jpg?t=1731252354)"}}>
                            <div className="CollectionNeuroBannerGifAnimationElementImageContainer">
                                <img src="https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/105600/library_600x900.jpg?t=1731252354" className="CollectionNeuroBannerGifAnimationElementImage"></img>
                            </div>
                            <div className="CollectionNeuroBannerGifAnimationElementContentContainer">
                                <div className="CollectionNeuroBannerGifAnimationElementContentName">Terraria</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            {/* @ts-expect-error Server Component */}
            <CollectionItems collectionID={Number(collectionID)} utm_source={queries.utm_source}></CollectionItems>
        </div>
    );
}
