import "./SkeletonStyles.css"

export const SkeletonCatalog = () => {
    return (
        <div className='SkeletonCatalog'>
            <div className="SkeletonCatalogBody">
                <p className="SkeletonCatalogLoaderContainer"><span className="SkeletonCatalogLoader"></span></p>
                <h3 className="SkeletonCatalogTitle">Подбираем товары</h3>
                <p className="SkeletonCatalogDescription">Собираем специальные подборки именно для вас</p>
            </div>
        </div>
    );
};