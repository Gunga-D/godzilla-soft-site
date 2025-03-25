import React from 'react';
import Image from "next/image";
import styled from "styled-components";
type ImageProps = {
    src: string,
    width?: number,
    radius: string,
    height: number,
    onClick?: () => void,
    transform?: boolean,
}
export const ImageComponent = (props: ImageProps) => {
    return (
        <StyledImg
                   onClick={props.onClick}
                   src = {props.src}
                   radius={props.radius}
                   width={props.width}
                   height={props.height}
                   transform={props.transform}
        >
            <Image src={props.src} alt={props.src} width={props.width} height={props.height}/>
        </StyledImg>
    );
};

const StyledImg = styled.div <ImageProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
  transition: transform 0.3s ease;
  &:hover {
    transform: ${props => props.transform ? 'scale(1.1)' : 'none'};
  }
`
