"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import "./GalleryMovieItemStyle.css"
import { Skeleton } from "../skeleton/Skeleton";

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


    const [isLoaded, setIsLoaded] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (videoRef.current) {
            const checkReadyState = () => {
                if (videoRef.current && videoRef.current.readyState > HTMLMediaElement.HAVE_NOTHING) {
                    setIsLoaded(true);
                }
            };

            // Проверяем сразу при монтировании
            checkReadyState();

            // Добавляем обработчики на случай если данные еще не загружены
            videoRef.current.addEventListener('loadeddata', checkReadyState);
            videoRef.current.addEventListener('canplay', checkReadyState);
            videoRef.current.addEventListener('error', () => setIsLoaded(true));

            return () => {
                if (videoRef.current) {
                    videoRef.current.removeEventListener('loadeddata', checkReadyState);
                    videoRef.current.removeEventListener('canplay', checkReadyState);
                }
            };
        }
    }, []);
    return (
        <div className="GalleryMovieItemContainer">
            {!isLoaded &&
                <Skeleton width={195} height={110} borderRadius={15}/>
            }
            <video src={props.videoLink} poster={props.posterLink}
                autoPlay={true} loop={true} muted={true} 
                className='GalleryMovieItemVideo' onClick={openVideo}
                ref={videoRef}
                style={{ display: isLoaded ? 'block' : 'none' }}></video>
            {isZoomed && (
                <div className="GalleryMovieItemZoomedOverlay" onClick={()=>{setIsZoomed(false)}}>
                    <div className="GalleryMovieItemZoomedOverlayVideoContainer">
                        <video src={props.videoLink} autoPlay={true} className='GalleryMovieItemZoomedVideo' loop={true} muted={true}></video>
                    </div>
                </div>
            )}
        </div>
    )
}