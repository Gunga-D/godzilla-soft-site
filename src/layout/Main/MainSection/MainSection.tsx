"use client"

import Image from "next/image";
import React from 'react';
import {DefaultBanner} from "../../../components/defaultBanner/DefaultBanner";
import styled from "styled-components";
import './MainSectionStyle.css'
import {useRouter} from "next/navigation";
import Link from "next/link";

export const MainSection = () => {
    const router = useRouter();
    return (
        <div className='StyledSection'>
            <DefaultBanner/>
            <div className='StyledWrapper'>
                <Link href="/steam_deposit">
                    <Image  alt='Godzilla Soft Steam Popolnenie'  src='/popolnenieSteam.png' height={220} width={260} className="styled-image"/>
                </Link>
                <Link href="/random">
                    <Image alt='Godzilla Soft Random Game' src='/randomGame.png' height={220} width={260} className="styled-image"/>
                </Link>
                <Link href="/games">
                    <Image  alt='Godzilla Soft  Game'  src='/games.png' height={220} width={260} className="styled-image"/>
                </Link>
                <Link href="/deposits">
                    <Image  alt='Godzilla Soft All Popolnenie' src='/allPopolnenie.png' height={220} width={260} className="styled-image"/>
                </Link>
            </div>
        </div>
    );
};

const StyledWrapper = styled.div `
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-top: 40px;
`
