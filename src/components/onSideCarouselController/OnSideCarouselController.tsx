"use client";

import "./OnSideCarouselControllerStyle.css"

type OnSideCarouselControllerProps = {
    id: string,
    offset?: number
}

export const OnSideCarouselController = (props: OnSideCarouselControllerProps) => {
    const leftSide = () => {
        const carousel = document.getElementById(props.id)
        carousel?.scrollBy({
            top: 0,
            left: -300,
            behavior: "smooth",
        });
    }
    const rightSide = () => {
        const carousel = document.getElementById(props.id)
        carousel?.scrollBy({
            top: 0,
            left: 300,
            behavior: "smooth",
        });
    }
    let offset = '-20px' 
    if (props.offset !== undefined) {
        offset = `${props.offset}px`
    }
    return (
        <div>
            <button onClick={leftSide} className="OnSideCarousellControllerButton OnSideCarousellControllerButtonLeft" style={{
                left: offset
            }}>❮</button>
            <button onClick={rightSide} className="OnSideCarousellControllerButton OnSideCarousellControllerButtonRight" style={{
                right: offset
            }}>❯</button>
        </div>
    )
}