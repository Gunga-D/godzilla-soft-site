import { Suspense } from "react";
import {CatalogComponent} from "../../layout/Catalog/Catalog";

export default function Games() {
    return (
        <div>
            <Suspense>
                <CatalogComponent active='games'/>
            </Suspense>
        </div>
    );
}
