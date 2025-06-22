import Link from "next/link";
import {itemApi} from "../../../common/api/item/item-api";
import {MediumCardForGames} from "../../../components/cardForGames/MediumCardForGames/MediumCardForGames";
import './BaseSectionStyle.css'
import { CarouselController } from "../../../components/carouselController/CarouselController";

type BaseSectionProps = {
    id: string,
    mainTitle?: string,
    url?: string,
    utm_source: string | undefined
}

export const BaseSection = async (props: BaseSectionProps) => {
    const data = await itemApi.getItem(`${props.url}`)

    let gamesGiftLinkQuery: { [key: string]: string } = { type: "gift", category: "popular" }
    if (props.utm_source) {
        gamesGiftLinkQuery["utm_source"] = props.utm_source
    }
    return (
        <div className='StyledBaseSectionSeasonDiv'>
            <div className="StyledBaseSectionHeader">
                <h2 className='StyledBaseSectionH2'>{props.mainTitle}</h2>
                <CarouselController id={props.id}></CarouselController>
            </div>

            <div className='StyledBaseSectionWrapper' id={props.id}>
                {data.map((item, index) => (
                    <MediumCardForGames
                        key={index}
                        id={item.id}
                        name={item.title}
                        categoryId={item.category_id}
                        is_for_sale={item.is_for_sale}
                        oldPrice={item.old_price}
                        newPrice={item.current_price}
                        imageUrl={item.thumbnail_url}
                        imageHeight={'204px'}
                        imageWidth={'204px'}
                        platform={item.platform}
                        region={item.region}
                        utm_source={props.utm_source}
                    />
                ))}
                <div className="StyledBaseSectionMoreItemsContainer">
                    <div className="StyledBaseSectionMoreItemsShadow"></div>
                    <div className="StyledBaseSectionMoreItemsShadow"></div>
                    <div className="StyledBaseSectionMoreItemsShadow"></div>
                    <div className="StyledBaseSectionMoreItemsShadow"></div>
                    <div className="StyledBaseSectionMoreItemsShadow"></div>
                    <div className="StyledBaseSectionMoreItemsShadow"></div>
                    <div className="StyledBaseSectionMoreItems">
                        <Link href={{pathname: "/games", query: gamesGiftLinkQuery}} style={{textDecoration: "none", color: "white"}}>Больше→</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

