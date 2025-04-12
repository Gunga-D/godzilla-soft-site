import {CatalogComponent} from "../../layout/Catalog/Catalog";

export default function Games() {
    const categoryID = 10001

    return (
        <div>
            <CatalogComponent categoryID={categoryID} active='games'/>
        </div>
    );
}
