import { collectionsApi } from "../../../../common/api/collections/collections-api";
import { getIdFromPath } from "../../../../hooks/links";
import { CollectionItems } from "../../../../layout/Collection/Items/Items";
import "./style.css"

type PageParams = Promise<{ value: string }>;

export default async function Page({ params }: { params: PageParams }) {
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

    return (
        <div className="CollectionPageContainer">
            <div className="CollectionHeader">
                <div className="CollectionAvatarImageContainer">
                    <img src={collection.background_image} className="CollectionAvatarImage"></img>
                </div>
                <div className="CollectionHeaderDetails">
                    <h1 className="CollectionHeaderName">{collection.name}</h1>
                    <p className="CollectionHeaderDescription" dangerouslySetInnerHTML={{
                        __html: collection.description
                    }}></p>
                </div>
            </div>
            {/* @ts-expect-error Server Component */}
            <CollectionItems collectionID={Number(collectionID)} ></CollectionItems>
        </div>
    );
}
