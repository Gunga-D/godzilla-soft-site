"use client";

import "./CarouselControllerStyle.css"

type CarouselControllerProps = {
    id: string,
}

export const CarouselController = (props: CarouselControllerProps) => {
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
            <button onClick={leftSide} className="CarousellControllerButton" style={{marginRight: '8px'}}>❮</button>
            <button onClick={rightSide} className="CarousellControllerButton">❯</button>
        </div>
    )
}