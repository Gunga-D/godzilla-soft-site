"use client";

import "./OnSideCarouselControllerStyle.css"

type OnSideCarouselControllerProps = {
    id: string,
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
    return (
        <div>
            <button onClick={leftSide} className="OnSideCarousellControllerButton OnSideCarousellControllerButtonLeft">❮</button>
            <button onClick={rightSide} className="OnSideCarousellControllerButton OnSideCarousellControllerButtonRight">❯</button>
        </div>
    )
}