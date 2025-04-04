import React, { Suspense } from 'react';
import {Filter} from "../../components/filter/Filter";
import {CatalogItems} from "../../components/catalogItems/CatalogItems";
import './CatalogStyles.css'
type CatalogProps = {
    active?: string,
}
export const CatalogComponent = (props: CatalogProps) => {
    return (
        <div className='StyleDiv'>
            <h2 className='h2Style'>Каталог</h2>
            <Suspense>
                <div style={{ display: 'flex', marginTop: '55px', gap: '15px' }}>
                        <CatalogItems active={props.active}/>
                </div>
            </Suspense>
        </div>
    );
};


