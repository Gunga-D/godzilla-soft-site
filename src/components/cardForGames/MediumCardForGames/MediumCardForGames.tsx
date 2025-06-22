'use client'

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { generateItemPath } from '../../../hooks/links';
import './MediumCardForGamesStyle.css'
import { addUTM } from '../../../hooks/utm';

type CardForGamesProps = {
  id: number,
  name: string,
  categoryId: number,
  imageUrl?: string,
  imageWidth?: string,
  imageHeight?: string,
  newPrice?: number,
  oldPrice?: number,
  is_for_sale?: boolean,
  platform?: string,
  region?: string,
  utm_source: string | undefined
}

export const MediumCardForGames = (props: CardForGamesProps) => {
    const handleCardClick = () => {
        window.open(addUTM(generateItemPath(props.categoryId, props.name, props.id), props.utm_source), '_blank');
    };

    const [regionIcon, setRegionIcon] = useState('');
    const [platformIcon, setPlatformIcon] = useState('');
    useEffect(() => {
        if (props.region === 'РФ и СНГ' || props.region === 'РФ') {
            setRegionIcon('rus');
        } else if (props.region === 'Весь мир') {
            setRegionIcon('allWorld');
        } else if (props.region === 'Весь мир кроме РФ') {
            setRegionIcon('rusWithOutSng');
        }

        switch (props.platform) {
            case 'Steam':
                setPlatformIcon('Steam');
                break;
            case 'Microsoft Store':
                setPlatformIcon('Microsoft');
                break;
            case 'Apple':
                setPlatformIcon('Apple');
                break;
            case 'EA Play':
                setPlatformIcon('Origin');
                break;
            case 'Rockstar':
                setPlatformIcon('Rockstar');
                break;
            case 'GOG':
                setPlatformIcon('GOG');
                break;
            case 'Minecraft.net':
                setPlatformIcon('Minecraft');
                break;
            default:
                setPlatformIcon('');
        }
    }, [props.region, props.platform]);

    let discount;
    if (props.is_for_sale && props.oldPrice && props.newPrice) {
        discount = Math.round(((props.oldPrice - props.newPrice) / props.oldPrice) * 100);
    }

    return (
        <div
            onClick={handleCardClick}
            className='MediumCardForGamesStyledCard'
        >
            {regionIcon && (
                <div className='MediumCardForGamesIconWrap'>
                    <Image
                        src={`/${regionIcon}.svg`}
                        alt={regionIcon}
                        width={22}
                        height={22}
                        priority
                    />
                </div>
            )}

            {platformIcon && (
                <div className='MediumCardForGamesPlatformWrap'>
                    <Image
                        src={`/${platformIcon}.svg`}
                        alt={platformIcon}
                        width={22}
                        height={22}
                        priority
                    />
                    <p className='MediumCardForGamesPlatformName'>{props.platform}</p>
                </div>
            )}

            <div className='MediumCardForGamesStyledInfoWrap'>
                <div className='MediumCardForGamesStyledName'>{props.name}</div>
                <div className='MediumCardForGamesPriceWrap'>
                    <div className='MediumCardForGamesStyledNewPrice'>{props.newPrice}₽</div>
                    {props.oldPrice && <div className='MediumCardForGamesStyledPOldPrice'>{props.oldPrice}</div>}
                    {props.is_for_sale && <div className='MediumCardForGamesSaleIcon'>{discount}%</div>}
                </div>
            </div>

            <img
                src={props.imageUrl}
                width={props.imageWidth}
                height={props.imageHeight}
                style={{borderRadius: "15px"}}
            />

            <div className='MediumCardForGamesGradientOverlay'/>
        </div>
    );
};