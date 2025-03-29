import {itemApi} from "../../../common/api/item/item-api";
import {MediumCardForGames} from "../../../components/cardForGames/MediumCardForGames/MediumCardForGames";
import './BaseSectionStyle.css'

type BaseSectionProps = {
    mainTitle?: string,
    url?: string,
}

export const BaseSection = async (props: BaseSectionProps) => {
    const data = await itemApi.getItem(`${props.url}`)
    return (
        <div className='StyledBaseSectionSeasonDiv'>
            <div>
                <h2 className='StyledBaseSectionH2'>{props.mainTitle}</h2>
                <p className='StyledBaseSectionP'>Показать все</p>
            </div>

            <div className='StyledBaseSectionWrapper'>
                {data?.slice(0, 5).map((item, index) => (
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
                    />
                ))}
            </div>
        </div>
    );
};

