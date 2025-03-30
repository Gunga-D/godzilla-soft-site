'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import './DefaultBannerStyle.css'

type Banner = {
    imageURL: string
    altText: string
    link: string
}

export const DefaultBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const banners: Banner[] = [
        {
            imageURL: "/MainBanner1.png",
            altText: "SteamBanner1",
            link: "/steam_deposit"
        }
    ]

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
      };
    
      const goToNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
      };
    return (
        <div className='DefaultBannerBannersContainer'>
            {banners.map((banner, idx) => (
                <div
                    key={idx}
                    className={"DefaultBannerStyledBanner " + (idx == currentIndex ? 'DefaultBannerStyledBannerActive' : 'DefaultBannerStyledBannerInactive')}
                >
                    <Link href={banner.link}>
                        <Image src={banner.imageURL} alt={banner.altText} width={1120} height={350} className='DefaultBannerStyledBannerImage'/>
                    </Link>
                </div>
            ))}
            {banners.length > 1 && (
                <button onClick={goToNext} className='DefaultBannerButtonDeterm' style={{right: "10px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={24} height={24}><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg></button>
            )}
            {banners.length > 1 && (
                <button onClick={goToPrev} className='DefaultBannerButtonDeterm' style={{left: "10px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={24} height={24}><path d="M5.72 9.25h11.282v1.5H5.72l5.43 5.431-1.06 1.06L2.85 10l7.241-7.242 1.06 1.061L5.72 9.25z"></path></svg></button>
            )}
        </div>
    );
};