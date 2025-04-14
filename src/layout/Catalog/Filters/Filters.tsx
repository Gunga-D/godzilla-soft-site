import { redirect } from "next/navigation";
import "./FiltersStyle.css"

type CatalogFiltersProps = {
    filters: { [key: string]: string | string[] | undefined }
}

export const CatalogFilters = async (props: CatalogFiltersProps) => {
    // const {category, priceFrom, priceTo, platform, region} = 
    // console.log(props.filters.category)
    // document.getElementById(`catalog_filter_category_${props.filters.category}`).setAttribute("checked", "true");

    async function applyFilters(formData: FormData) {
        'use server'
        
        const params: any = new Proxy({}, {
            set(target: any, prop, value) {
              if (value !== undefined) {
                target[prop] = value;
              }
              return true;
            },
        });

        let priceFrom = formData.get("price-from")
        if (priceFrom) {
            params.priceFrom = String(priceFrom)
        }
        let priceTo = formData.get("price-to")
        if (priceTo) {
            params.priceTo = String(priceTo)
        }

        let platforms = formData.getAll("platform")
        if (platforms.length > 0) {
            params.platform = platforms.join(";")
        }

        let regions = formData.getAll("region")
        if (regions.length > 0) {
            params.region = regions.join(";")
        }

        let category = formData.get("category")
        if (category) {
            params.category = String(category)
        }

        const searchParams = new URLSearchParams(params)
        redirect(`/games?${searchParams.toString()}`)
    }

    return (
        <form className='CatalogInnerFilters' action={applyFilters}>
            <div className='CatalogInnerFiltersFilter'>
                <h5 className='CatalogInnerFiltersFilterLabel'>Категория</h5>
                <div className='CatalogInnerFiltersFilterVariantsContainer'>
                    <div className='CatalogInnerFiltersFilterVariant'>
                        <input type="radio" className="CatalogInnerFiltersFilterVariantInput" id="catalog_filter_category_popular" name={"category"} value={"popular"} defaultChecked={props.filters.category=='popular'}></input>
                        <label htmlFor="catalog_filter_category_popular" className="CatalogInnerFiltersFilterVariantLabel">Популярные</label>
                    </div>
                    <div className='CatalogInnerFiltersFilterVariant'>
                        <input type="radio" className='CatalogInnerFiltersFilterVariantInput' id="catalog_filter_category_news" name={"category"} value={"news"} defaultChecked={props.filters.category=='news'}></input>
                        <label htmlFor="catalog_filter_category_news" className="CatalogInnerFiltersFilterVariantLabel">Новинки</label>
                    </div>
                    <div className='CatalogInnerFiltersFilterVariant' style={{gridColumn: 'span 2'}}>
                        <input type="radio" className='CatalogInnerFiltersFilterVariantInput' id="catalog_filter_category_unavailable" name={"category"} value={"unavailable"} defaultChecked={props.filters.category=='unavailable'}></input>
                        <label htmlFor="catalog_filter_category_unavailable" className="CatalogInnerFiltersFilterVariantLabel">Недоступно в РФ</label>
                    </div>
                </div>
            </div>
            <div className='CatalogInnerFiltersFilter'>
                <h5 className='CatalogInnerFiltersFilterLabel'>Цена, ₽</h5>
                <div className='CatalogInnerFiltersFilterNumericRoot'>
                    <div className='CatalogInnerFiltersFilterNumericInputContainer'>
                        <input placeholder='От' type="number" className='CatalogInnerFiltersFilterNumericInput' inputMode='numeric' name='price-from' defaultValue={props.filters.priceFrom}></input>
                    </div>
                    <div className='CatalogInnerFiltersFilterNumericInputContainer'>
                        <input placeholder='до' type="number" className='CatalogInnerFiltersFilterNumericInput' inputMode='numeric' name='price-to' defaultValue={props.filters.priceTo}></input>                            
                    </div>
                </div>
            </div>
            <div className='CatalogInnerFiltersFilter'>
                <h5 className='CatalogInnerFiltersFilterLabel'>Платформа</h5>
                <div className='CatalogInnerFiltersFilterToggleContainer' style={{marginTop: "0"}}>
                    <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"Steam"}></input>
                    <span className='CatalogInnerFiltersFilterToggleText'>Steam</span>
                </div>
                <div className='CatalogInnerFiltersFilterToggleContainer'>
                    <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"EA Play"}></input>
                    <span className='CatalogInnerFiltersFilterToggleText'>EA Play</span>
                </div>
                <div className='CatalogInnerFiltersFilterToggleContainer'>
                    <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"Rockstar"}></input>
                    <span className='CatalogInnerFiltersFilterToggleText'>Rockstar</span>
                </div>
                <div className='CatalogInnerFiltersFilterToggleContainer'>
                    <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"GOG"}></input>
                    <span className='CatalogInnerFiltersFilterToggleText'>GOG</span>
                </div>
                <div className='CatalogInnerFiltersFilterToggleContainer'>
                    <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"Minecraft.net"}></input>
                    <span className='CatalogInnerFiltersFilterToggleText'>Minecraft.net</span>
                </div>
            </div>
            <div className='CatalogInnerFiltersFilter'>
                <h5 className='CatalogInnerFiltersFilterLabel'>Регион активации</h5>
                <div className='CatalogInnerFiltersFilterToggleContainer' style={{marginTop: "0"}}>
                    <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="region" value={"Весь мир"}></input>
                    <span className='CatalogInnerFiltersFilterToggleText'>Весь мир</span>
                </div>
                <div className='CatalogInnerFiltersFilterToggleContainer'>
                    <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="region" value={"РФ и СНГ"}></input>
                    <span className='CatalogInnerFiltersFilterToggleText'>РФ и СНГ</span>
                </div>
                <div className='CatalogInnerFiltersFilterToggleContainer'>
                    <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="region" value={"РФ"}></input>
                    <span className='CatalogInnerFiltersFilterToggleText'>РФ</span>
                </div>
                <div className='CatalogInnerFiltersFilterToggleContainer'>
                    <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="region" value={"Весь мир кроме РФ"}></input>
                    <span className='CatalogInnerFiltersFilterToggleText'>Весь мир кроме РФ</span>
                </div>
            </div>
            <div className="CatalogInnerFiltersSubmitBtnContainer">
                <button type="submit" className="CatalogInnerFiltersSubmitBtn">Показать больше товаров</button>
            </div>
        </form>
    )
}