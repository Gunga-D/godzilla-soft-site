import React from 'react';
import './FilterStyle.css'
import {FilterPrice} from "./Filters/FilterPrice";
import {FilterPlatform} from "./Filters/FilterPlatform";
import {FilterRegion} from "./Filters/FilterRegion";
export const Filter = () => {
    return (
        <div className='styled-div'>
            <FilterPrice/>
            <FilterPlatform/>
            <FilterRegion/>
        </div>
    );
};


