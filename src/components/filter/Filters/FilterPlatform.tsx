"use client";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { useStore } from "zustand/react";
import { FilterStore } from "../../../common/store/FilterStatus/FilterStatus";
import './FilterPlarformStyle.css';

export const FilterPlatform = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const { changePlatform } = useStore(FilterStore);

    const toggleFilter = () => {
        setIsOpen(!isOpen);
        setSelectedOption('');
        changePlatform('');
    };

    const PlatformChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        changePlatform(value);
    };

    useEffect(() => {
        setSelectedOption(null);
        changePlatform('');
    }, []);

    return (
        <div>
            <div className={`filter-platform ${isOpen ? 'filter-platform-open' : ''}`}>
                <div className="filter-platform-header" onClick={toggleFilter}>
                    <p className="filter-platform-title">Платформа</p>
                    <Image
                        src={`/arrow.svg`}
                        alt={'arrow'}
                        width={15}
                        height={15}
                        priority
                    />
                </div>
                {isOpen && (
                    <div className="filter-platform-options">
                        <div className="filter-platform-option">
                            <label>
                                <input
                                    type="radio"
                                    name="platform"
                                    value="Steam"
                                    checked={selectedOption === 'Steam'}
                                    onChange={PlatformChange}
                                    className="filter-platform-radio"
                                />
                                <span className="filter-platform-label">Steam</span>
                            </label>
                        </div>
                        <div className="filter-platform-option">
                            <label>
                                <input
                                    type="radio"
                                    name="platform"
                                    value="Rockstar"
                                    checked={selectedOption === 'Rockstar'}
                                    onChange={PlatformChange}
                                    className="filter-platform-radio"
                                />
                                <span className="filter-platform-label">Rockstar</span>
                            </label>
                        </div>
                        <div className="filter-platform-option">
                            <label>
                                <input
                                    type="radio"
                                    name="platform"
                                    value="EA Play"
                                    checked={selectedOption === 'EA Play'}
                                    onChange={PlatformChange}
                                    className="filter-platform-radio"
                                />
                                <span className="filter-platform-label">EA Play (Origin)</span>
                            </label>
                        </div>
                        <div className="filter-platform-option">
                            <label>
                                <input
                                    type="radio"
                                    name="platform"
                                    value="Minecraft.net"
                                    checked={selectedOption === 'Minecraft.net'}
                                    onChange={PlatformChange}
                                    className="filter-platform-radio"
                                />
                                <span className="filter-platform-label">Minecraft</span>
                            </label>
                        </div>
                        <div className="filter-platform-option">
                            <label>
                                <input
                                    type="radio"
                                    name="platform"
                                    value="GOG"
                                    checked={selectedOption === 'GOG'}
                                    onChange={PlatformChange}
                                    className="filter-platform-radio"
                                />
                                <span className="filter-platform-label">GOG</span>
                            </label>
                        </div>
                        <div className="filter-platform-option">
                            <label>
                                <input
                                    type="radio"
                                    name="platform"
                                    value="Microsoft Store"
                                    checked={selectedOption === 'Microsoft Store'}
                                    onChange={PlatformChange}
                                    className="filter-platform-radio"
                                />
                                <span className="filter-platform-label">Microsoft Store</span>
                            </label>
                        </div>
                        <div className="filter-platform-option">
                            <label>
                                <input
                                    type="radio"
                                    name="platform"
                                    value=""
                                    checked={selectedOption === ""}
                                    onChange={PlatformChange}
                                    className="filter-platform-radio"
                                />
                                <span className="filter-platform-label">Другое</span>
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
