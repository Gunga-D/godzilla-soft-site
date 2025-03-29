import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export const DefaultBanner = () => {
    return (
        <div className='StyledBanner'>
            <Link href={"/steam_deposit"}>
                <Image src='/ActualBanner.jpg' alt='GodzillaSoft' width={1120} height={350}/>
            </Link>
        </div>
    );
};