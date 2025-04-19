import { redirect } from "next/navigation";
import "./FiltersStyle.css"

type CatalogFiltersProps = {
    categoryID: number,
    filters: { [key: string]: string | string[] | undefined }
}

export const CatalogFilters = async (props: CatalogFiltersProps) => {
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

        let type = formData.get("type")
        if (type) {
            params.type = String(type)
        }

        let catalogPath = ""
        switch (props.categoryID) {
          case 10001:
            catalogPath = "games"
            break
          case 10002:
            catalogPath = "subscriptions"
            break
          case 10004:
            catalogPath = "deposits"
            break
        }

        const searchParams = new URLSearchParams(params)
        redirect(`/${catalogPath}?${searchParams.toString()}`)
    }

    return (
        <form action={applyFilters}>
            {props.categoryID == 10001 && (
                <div className='CatalogInnerFiltersFilter'>
                    <h5 className='CatalogInnerFiltersFilterLabel'>Тип</h5>
                    <div className='CatalogInnerFiltersFilterVariantsContainer'>
                        <div className='CatalogInnerFiltersFilterVariant'>
                            <input type="radio" className="CatalogInnerFiltersFilterVariantInput" id="catalog_filter_type_gift" name={"type"} value={"gift"} defaultChecked={props.filters.type=='gift'}></input>
                            <label htmlFor="catalog_filter_type_gift" className="CatalogInnerFiltersFilterVariantLabel">Подарком</label>
                        </div>
                        <div className='CatalogInnerFiltersFilterVariant'>
                            <input type="radio" className='CatalogInnerFiltersFilterVariantInput' id="catalog_filter_type_key" name={"type"} value={"key"} defaultChecked={props.filters.type=='key'}></input>
                            <label htmlFor="catalog_filter_type_key" className="CatalogInnerFiltersFilterVariantLabel">Ключом</label>
                        </div>
                    </div>
                </div>
            )}
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
            {props.categoryID == 10001 && (
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
            )}
            {props.categoryID == 10001 && (
                <div className='CatalogInnerFiltersFilter'>
                    <h5 className='CatalogInnerFiltersFilterLabel'>Платформа</h5>
                    <div className='CatalogInnerFiltersFilterToggleContainer' style={{marginTop: "0"}}>
                        <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"Steam"} defaultChecked={props.filters.platform?.includes("Steam")}></input>
                        <span className='CatalogInnerFiltersFilterToggleText'>Steam</span>
                    </div>
                    <div className='CatalogInnerFiltersFilterToggleContainer'>
                        <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"EA Play"} defaultChecked={props.filters.platform?.includes("EA Play")}></input>
                        <span className='CatalogInnerFiltersFilterToggleText'>EA Play</span>
                    </div>
                    <div className='CatalogInnerFiltersFilterToggleContainer'>
                        <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"Rockstar"} defaultChecked={props.filters.platform?.includes("Rockstar")}></input>
                        <span className='CatalogInnerFiltersFilterToggleText'>Rockstar</span>
                    </div>
                    <div className='CatalogInnerFiltersFilterToggleContainer'>
                        <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"GOG"} defaultChecked={props.filters.platform?.includes("GOG")}></input>
                        <span className='CatalogInnerFiltersFilterToggleText'>GOG</span>
                    </div>
                    <div className='CatalogInnerFiltersFilterToggleContainer'>
                        <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"Minecraft.net"} defaultChecked={props.filters.platform?.includes("Minecraft.net")}></input>
                        <span className='CatalogInnerFiltersFilterToggleText'>Minecraft.net</span>
                    </div>
                </div>
            )}
            {props.categoryID == 10004 && (
                <div className='CatalogInnerFiltersFilter'>
                    <h5 className='CatalogInnerFiltersFilterLabel'>Платформа</h5>
                    <div className='CatalogInnerFiltersFilterToggleContainer' style={{marginTop: "0"}}>
                        <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"Steam"} defaultChecked={props.filters.platform?.includes("Steam")}></input>
                        <span className='CatalogInnerFiltersFilterToggleText'>Steam</span>
                    </div>
                    <div className='CatalogInnerFiltersFilterToggleContainer'>
                        <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="platform" value={"Apple"} defaultChecked={props.filters.platform?.includes("Apple")}></input>
                        <span className='CatalogInnerFiltersFilterToggleText'>Apple</span>
                    </div>
                </div>
            )}
            {props.categoryID == 10001 && (
                <div className='CatalogInnerFiltersFilter'>
                    <h5 className='CatalogInnerFiltersFilterLabel'>Регион активации</h5>
                    <div className='CatalogInnerFiltersFilterToggleContainer' style={{marginTop: "0"}}>
                        <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="region" value={"Весь мир"} defaultChecked={props.filters.region?.toString().split(";").includes("Весь мир")}></input>
                        <span className='CatalogInnerFiltersFilterToggleText'>Весь мир</span>
                    </div>
                    <div className='CatalogInnerFiltersFilterToggleContainer'>
                        <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="region" value={"РФ и СНГ"} defaultChecked={props.filters.region?.toString().split(";").includes("РФ и СНГ")}></input>
                        <span className='CatalogInnerFiltersFilterToggleText'>РФ и СНГ</span>
                    </div>
                    <div className='CatalogInnerFiltersFilterToggleContainer'>
                        <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="region" value={"РФ"} defaultChecked={props.filters.region?.toString().split(";").includes("РФ")}></input>
                        <span className='CatalogInnerFiltersFilterToggleText'>РФ</span>
                    </div>
                    <div className='CatalogInnerFiltersFilterToggleContainer'>
                        <input type='checkbox' className='CatalogInnerFiltersFilterToggleInput' name="region" value={"Весь мир кроме РФ"} defaultChecked={props.filters.region?.toString().split(";").includes("Весь мир кроме РФ")}></input>
                        <span className='CatalogInnerFiltersFilterToggleText'>Весь мир кроме РФ</span>
                    </div>
                </div>
            )}
            <div className="CatalogInnerFiltersSubmitBtnContainer">
                <button type="submit" className="CatalogInnerFiltersSubmitBtn">Показать больше товаров</button>
            </div>
        </form>
    )
}