"use client"

import { useState } from "react";
import "./RequiredAuthButtonStyle.css"
import AuthModal from "../authModal/AuthModal";

const RequiredAuthButton = () => {
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
            <div onClick={openModal} className="RequiredAuthButton">Войти или зарегистрироваться</div>
            {isOpen && (
                <AuthModal onClose={closeModal} withoutCloseBtn={false}></AuthModal>
            )}
        </div>
    )
}

export default RequiredAuthButton;