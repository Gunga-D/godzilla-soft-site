"use client"

import BannerAuthButton from "../bannerAuthButton/BannerAuthButton";
import { useUser } from "../../common/context/user-context";
import "./RandomBannerStyle.css"

const RandomBanner = () => {
    const {user} = useUser()

    return (
        <>
        {!user && (
        <div className="RandomGamePageBanner">
            <div>
                <h2 style={{fontSize: '24px', marginBottom: '8px', fontWeight: '900'}}>Забери случайную игру Steam бесплатно</h2>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
                    <img src="/icons8-telegram-50.png" width={25} height={25}></img>
                    <span style={{marginLeft: '8px', color: 'gray'}}>За первую регистрацию через телеграмм дарим случайную игру Steam, скорее забирай свой подарок!</span>
                </div>
                <div>
                    <BannerAuthButton></BannerAuthButton>
                </div>
            </div>
            <img src="/RandomBannerCat.png" width={200} height={62} className="RandomGamePageBannerImage"></img>
        </div>
        )}
        </>
    )
}

export default RandomBanner;