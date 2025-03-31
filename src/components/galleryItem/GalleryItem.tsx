"use client"

import { useState } from "react";
import "./GalleryItemStyle.css"

type GalleryItemProps = {
    link: string
}

export const GalleryItem = (props: GalleryItemProps) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const openImage = () => {
        setIsZoomed(true)
    }
    return (
        <div className="GalleryItem">
            <img className='GalleryItemImage' src={props.link} width={150} height={84.5} onClick={openImage}></img>
            {isZoomed && (
                <div className="GalleryItemZoomedOverlay" onClick={()=>{setIsZoomed(false)}}>
                    <div className="GalleryItemZoomedImageContainer">
                        <img className="GalleryItemZoomedImage" src={props.link} width={800} height={450}></img>
                    </div>
                </div>
            )}
        </div>
    )
}