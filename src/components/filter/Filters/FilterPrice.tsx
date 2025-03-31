"use client";
import React, { useEffect, useState } from 'react';
import { useStore } from "zustand/react";
import { FilterStore } from "../../../common/store/FilterStatus/FilterStatus";
import Image from "next/image";
import './FilterPriceStyle.css'
export const FilterPrice = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const { changeMinPrice, changeMaxPrice } = useStore(FilterStore);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const toggleFilter = () => {
        setIsOpen(!isOpen);
        setSelectedOption('');
        changeMinPrice('');
        changeMaxPrice('');
    };

    useEffect(() => {
        setSelectedOption(null);
        changeMaxPrice('');
        changeMinPrice('');
    }, []);

    const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const [min, max] = value.split('-').map((v) => v.trim());
        setSelectedOption(value);
        changeMinPrice(min);
        changeMaxPrice(max);
        setMinPrice(min);
        setMaxPrice(max);
    };

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        changeMinPrice(value);
        setMinPrice(value);
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        changeMaxPrice(value);
        setMaxPrice(value);
    };

    return (
        <div>
            <div className={`filter-price ${isOpen ? 'filter-price-open' : ''}`}>
                <div className="filter-price-header" onClick={toggleFilter}>
                    <p className="filter-price-title">Цена</p>
                    <Image
                        src={`/arrow.svg`}
                        alt={'arrow'}
                        width={15}
                        height={15}
                        priority
                    />
                </div>
                {isOpen && (
                    <div className="filter-price-options">
                        <div className="filter-price-inputs">
                            <input
                                className="filter-price-input"
                                placeholder='От 0'
                                value={minPrice}
                                onChange={handleMinChange}
                            />
                            <input
                                className="filter-price-input"
                                placeholder='До 90 000'
                                value={maxPrice}
                                onChange={handleMaxChange}
                            />
                        </div>
                        <div className="filter-price-option">
                            <label>
                                <input
                                    type="radio"
                                    name="price"
                                    value="0 - 1000"
                                    checked={selectedOption === '0 - 1000'}
                                    onChange={handlePriceRangeChange}
                                    className="filter-price-radio"
                                />
                                <div className="filter-price-label">До 1000 ₽</div>
                            </label>
                        </div>
                        <div className="filter-price-option">
                            <label>
                                <input
                                    type="radio"
                                    name="price"
                                    value="1000 - 3000"
                                    checked={selectedOption === '1000 - 3000'}
                                    onChange={handlePriceRangeChange}
                                    className="filter-price-radio"
                                />
                                <div className="filter-price-label">1000 ₽ - 3000 ₽</div>
                            </label>
                        </div>
                        <div className="filter-price-option">
                            <label>
                                <input
                                    type="radio"
                                    name="price"
                                    value="3000 - 6000"
                                    checked={selectedOption === '3000 - 6000'}
                                    onChange={handlePriceRangeChange}
                                    className="filter-price-radio"
                                />
                                <div className="filter-price-label">3000 ₽ - 6000 ₽</div>
                            </label>
                        </div>
                        <div className="filter-price-option">
                            <label>
                                <input
                                    type="radio"
                                    name="price"
                                    value="6000 - 20000"
                                    checked={selectedOption === '6000 - 20000'}
                                    onChange={handlePriceRangeChange}
                                    className="filter-price-radio"
                                />
                                <div className="filter-price-label">6000 ₽ и выше</div>
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
