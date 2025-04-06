"use client"

import { useCallback, useEffect, useState } from "react";
import "./GalleryMovieItemStyle.css"

type GalleryMovieItemProps = {
    videoLink: string;
    posterLink: string;
}

export const GalleryMovieItem = (props: GalleryMovieItemProps) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const openVideo = () => {
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
        <div className="GalleryMovieItemContainer">
            <video src={props.videoLink} poster={props.videoLink} autoPlay={true} className='GalleryMovieItemVideo' loop={true} muted={true} onClick={openVideo}></video>
            {isZoomed && (
                <div className="GalleryMovieItemZoomedOverlay" onClick={()=>{setIsZoomed(false)}}>
                    <div className="GalleryMovieItemZoomedOverlayVideoContainer">
                        <video src={props.videoLink} poster={props.videoLink} autoPlay={true} className='GalleryMovieItemZoomedVideo' loop={true} muted={true}></video>
                    </div>
                </div>
            )}
        </div>
    )
}