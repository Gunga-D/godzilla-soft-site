"use client"
import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {useRouter} from "next/navigation";

export const DefaultBanner = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/steam_deposit');
    };

    return (
        <div className='StyledBanner' onClick={handleClick}>
            <Image src='/ActualBanner.jpg' alt='GodzillaSoft' width={1120} height={350}/>
        </div>
    );
};

const StyledWrapper = styled.div `
    display: flex;
    margin-top: 90px;
  //width: 1120px;
  //height: 350px;
  background: #FFFFFF;
  justify-content: space-between;
  border-radius: 5px;

`
