'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import './DefaultBannerStyle.css'

type Banner = {
    imageURL: string
    logoURL: string
    logoWidth: number
    logoHeight: number
    description: string
    link: string
}

export const DefaultBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const banners: Banner[] = [
        {
            imageURL: "/assasinsCreedBannerMain.png",
            logoURL: "/b67ffdc80b7ae73eb565aa4d67546dee.png",
            logoWidth: 256,
            logoHeight: 97,
            description: "Вернитесь к корням и истокам! Assassin's Creed Shadows продолжает наследие легендарной серии, раскрывая новые тайны и истории.",
            link: "/games/Assassin’s_Creed_Shadows_305"
        },
        {
            imageURL: "/inzoiBannerMain2.png",
            logoURL: "/inZOIlogo.png",
            logoWidth: 240,
            logoHeight: 58,
            description: "Ваши мечты — ваш дом! В inZOI смешиваются элементы симулятора жизни и увлекательного мира, напоминая и перекрывая любимые моменты из Sims. Поэтому - встречайте главного конкурента Sims!",
            link: "/games/inZOI_306"
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
                    <div className="DefaultBannerStyledBackground"></div>
                    <Image src={banner.imageURL} alt="Banner Image" width={1120} height={379} className='DefaultBannerStyledBannerImage'/>
                    <Image src={banner.logoURL} alt='Banner Logo' width={banner.logoWidth} height={banner.logoHeight} className='DefaultBannerStyledBannerLogo'></Image>
                    <div className='DefaultBannerStyledContentContainer'>
                        <p className='DefaultBannerStyledDescription'>{banner.description}</p>
                        <Link href={banner.link} className='DefaultBannerStyledButton'>Купить</Link>
                    </div>
                </div>
            ))}
            {banners.length > 1 && (
                <button onClick={goToNext} className='DefaultBannerButtonDeterm' style={{right: "10px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={20} height={20}><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg></button>
            )}
            {banners.length > 1 && (
                <button onClick={goToPrev} className='DefaultBannerButtonDeterm' style={{left: "10px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={20} height={20}><path d="M5.72 9.25h11.282v1.5H5.72l5.43 5.431-1.06 1.06L2.85 10l7.241-7.242 1.06 1.061L5.72 9.25z"></path></svg></button>
            )}
        </div>
    );
};