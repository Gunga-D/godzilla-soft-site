"use client"

import { useState } from 'react';
import { useUser } from '../../common/context/user-context'
import './GetSubscriptionProductButtonStyle.css'
import SubscriptionButton from '../subscriptionButton/SubscriptionButton';
import { subApi } from '../../common/api/subcription/api';
import SubscriptionProductModal from '../subscriptionProductModal/SubscriptionProductModal';
import ErrorToast from '../errorToast/ErrorToast';

type GetSubscriptionProductButtonProps = {
    item_id: number
    item_name: string
};

export const GetSubscriptionProductButton = (props: GetSubscriptionProductButtonProps) => {
    const {user, accessToken} = useUser()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [accountLogin, setAccountLogin] = useState<string>("")
    const [accountPwd, setAccountPwd] = useState<string>("")
    const [err, setError] = useState<string | null>(null)
    const onGetSubscriptionProduct = () => {
        const getAccount = async () => {
            try {
                setIsLoading(true)
                const data = await subApi.getProduct(props.item_id, accessToken)
                setAccountLogin(data.data.login)
                setAccountPwd(data.data.password)
                openModal()
            } catch (err: any) {
                setError(err.response.data.message)
            } finally {
                setIsLoading(false)
            }
        };
        getAccount()
        return
    }

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
            {(!user || !user.has_subscription) && (
                <SubscriptionButton btnText='Играть' className='GetSubscriptionProductButton'></SubscriptionButton>
            )}
            {(user && user.has_subscription) && (
                <div className="GetSubscriptionProductButton" onClick={onGetSubscriptionProduct}>
                    {isLoading && (
                        <span className="GetSubscriptionProductLoader"></span>
                    )}
                    {!isLoading && (
                        <span>Играть</span>
                    )}
                </div>
            )}
            {(isOpen && !isLoading)&& (
                <SubscriptionProductModal onClose={closeModal} itemName={props.item_name} login={accountLogin} password={accountPwd}></SubscriptionProductModal>
            )}
            {err && (
                <ErrorToast message={err} onClose={() => setError(null)} duration={3000}></ErrorToast>
            )}
        </div>
    )
}