import React from 'react';
import sprite from './../../assets/images/sprite.svg'

type IconProps = {
    iconId?: string,
    width?: string,
    height?: string,
    viewBox?: string,
    fill?: string,
}
export const Icon = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width || "50"}
             height={props.height || "50"}
             fill = {props.fill}
             viewBox={props.viewBox || "0 0 50 50"}>
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </svg>
    );
};

