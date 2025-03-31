"use client"

import './BuyButtonStyle.css'

export const BuyButton = () => {
    const scroll = () => {
        const element = document.getElementById('dostavka');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div onClick={scroll} className="BuyButtonOnCard">Купить</div>
    )
}