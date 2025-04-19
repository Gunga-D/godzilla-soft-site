"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import "./GalleryItemStyle.css"
import { Skeleton } from "../skeleton/Skeleton";

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

    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        if (imgRef.current) {
            if (imgRef.current.complete) {
                setIsLoaded(true);
            }
        }
    }, []);
    return (
        <div className="GalleryItem">
            {!isLoaded &&
                <Skeleton width={195} height={110} borderRadius={15}/>
            }
            <img 
                ref={imgRef}
                className='GalleryItemImage' 
                src={props.link} 
                width={195} 
                height={110} 
                onClick={openImage} 
                onLoad={() => setIsLoaded(true)}
                onError={() => {
                    setIsLoaded(false);
                }}
                style={{ display: isLoaded ? 'block' : 'none' }}
                alt="Gallery item"
            />
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