"use client"

import React, { useState } from 'react';
import SubscriptionModal from '../subscriptionModal/SubscriptionModal';

type SubscriptionButtonProps = {
    className: string
    btnText: string
};

const SubscriptionButton = (props: SubscriptionButtonProps) => {    
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
            <div onClick={openModal}>
                <div className={props.className}>{props.btnText}</div>
                {isOpen && (
                    <SubscriptionModal onClose={closeModal} withoutCloseBtn={false}></SubscriptionModal>
                )}
            </div>
        </div>
    );
};

export default SubscriptionButton;