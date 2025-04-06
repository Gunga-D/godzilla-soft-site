"use client"

import { useCallback, useEffect, useState } from "react";
import "./GalleryItemStyle.css"

type GalleryItemProps = {
    link: string
}

export const GalleryItem = (props: GalleryItemProps) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const openImage = () => {
        setIsZoomed(true)
    }

    const escFunction = useCallback((event: any) => {
        if (event.key === "Escape") {
            setIsZoomed(false)
        }
    }, []);
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    
        return () => {
          document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);
    return (
        <div className="GalleryItem">
            <img className='GalleryItemImage' src={props.link} width={195} height={110} onClick={openImage}></img>
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