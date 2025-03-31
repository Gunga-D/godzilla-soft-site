"use client";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { useStore } from "zustand/react";
import { FilterStore } from "../../../common/store/FilterStatus/FilterStatus";
import './FilterRegionStyle.css'
export const FilterRegion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const { changeRegion } = useStore(FilterStore);

    const toggleFilter = () => {
        setIsOpen(!isOpen);
        setSelectedOption('');
        changeRegion('');
    };

    useEffect(() => {
        setSelectedOption(null);
        changeRegion('');
    }, []);

    const RegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        changeRegion(value);
    };

    return (
        <div>
            <div className={`filter-region ${isOpen ? 'filter-region-open' : ''}`}>
                <div className="filter-region-header" onClick={toggleFilter}>
                    <p className="filter-region-title">Регион</p>
                    <Image
                        src={`/arrow.svg`}
                        alt={'arrow'}
                        width={15}
                        height={15}
                        priority
                    />
                </div>
                {isOpen && (
                    <div className="filter-region-options">
                        <div className="filter-region-option">
                            <label>
                                <input
                                    type="radio"
                                    name="region"
                                    value="%D0%92%D0%B5%D1%81%D1%8C%20%D0%BC%D0%B8%D1%80"
                                    checked={selectedOption === '%D0%92%D0%B5%D1%81%D1%8C%20%D0%BC%D0%B8%D1%80'}
                                    onChange={RegionChange}
                                    className="filter-region-radio"
                                />
                                <span className="filter-region-label">Весь мир</span>
                            </label>
                        </div>
                        <div className="filter-region-option">
                            <label>
                                <input
                                    type="radio"
                                    name="region"
                                    value="%D0%A0%D0%A4%20%D0%B8%20%D0%A1%D0%9D%D0%93"
                                    checked={selectedOption === '%D0%A0%D0%A4%20%D0%B8%20%D0%A1%D0%9D%D0%93'}
                                    onChange={RegionChange}
                                    className="filter-region-radio"
                                />
                                <span className="filter-region-label">РФ и СНГ</span>
                            </label>
                        </div>
                        <div className="filter-region-option">
                            <label>
                                <input
                                    type="radio"
                                    name="region"
                                    value="%D0%A0%D0%A4"
                                    checked={selectedOption === '%D0%A0%D0%A4'}
                                    onChange={RegionChange}
                                    className="filter-region-radio"
                                />
                                <span className="filter-region-label">РФ</span>
                            </label>
                        </div>
                        <div className="filter-region-option">
                            <label>
                                <input
                                    type="radio"
                                    name="region"
                                    value="%D0%92%D0%B5%D1%81%D1%8C%20%D0%BC%D0%B8%D1%80%20%D0%BA%D1%80%D0%BE%D0%BC%D0%B5%20%D0%A0%D0%A4"
                                    checked={selectedOption === '%D0%92%D0%B5%D1%81%D1%8C%20%D0%BC%D0%B8%D1%80%20%D0%BA%D1%80%D0%BE%D0%BC%D0%B5%20%D0%A0%D0%A4'}
                                    onChange={RegionChange}
                                    className="filter-region-radio"
                                />
                                <span className="filter-region-label">Весь мир кроме РФ</span>
                            </label>
                        </div>
                        <div className="filter-region-option">
                            <label>
                                <input
                                    type="radio"
                                    name="region"
                                    value=""
                                    checked={selectedOption === ''}
                                    onChange={RegionChange}
                                    className="filter-region-radio"
                                />
                                <span className="filter-region-label">Другое</span>
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
