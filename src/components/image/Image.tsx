import React from 'react';
import styled from "styled-components";
type ImageProps = {
    src?: string,
    width?: string,
    radius?: string,
    height?: string,
    onClick?: () => void,
    hoverEffect?: boolean,
    cursor?: boolean,
    transform?: boolean,
}
export const Image = (props: ImageProps) => {
    return (
        <StyledImg onClick={props.onClick}
                   hoverEffect={props.hoverEffect}
                   src = {props.src}
                   radius={props.radius}
                   width={props.width}
                   height={props.height}
                   cursor = {props.cursor}
                   transform={props.transform}
        />
    );
};

const StyledImg = styled.img <ImageProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
  transition: transform 0.3s ease;
  cursor: ${props => props.cursor ? 'pointer' : 'default'};
  &:hover {
    cursor: ${props => props.cursor ? 'pointer' : 'default'};
    transform: ${props => props.transform ? 'scale(1.1)' : 'none'};
  }
`
