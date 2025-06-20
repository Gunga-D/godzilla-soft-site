"use client"

import { useState } from "react";
import "./BannerAuthButtonStyle.css"
import AuthModal from "../authModal/AuthModal";

const BannerAuthButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        document.body.style.overflowY = 'hidden'
        setIsOpen(true)
    }
    const closeModal = (e: any) => {
        if (e) {
            e.stopPropagation();
        }
        document.body.style.overflowY = 'auto'
        setIsOpen(false)
    }
    return (
        <div>
            <button onClick={openModal} className="BannerAuthButton">Забрать подарок</button>
            {isOpen && (
                <AuthModal onClose={closeModal} withoutCloseBtn={false}></AuthModal>
            )}
        </div>
    )
}

export default BannerAuthButton;