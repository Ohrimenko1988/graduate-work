import React, { Component } from 'react'

export interface ImageProps {
    src: string;
    alt: string;
    className: string;
    draggable?: boolean;
    onClickHandler?: any;
}

const Image: React.FC<ImageProps> = (props: ImageProps) => {
    return (
        <div className={props.className}>
            <img draggable={props.draggable} src={props.src} alt={props.alt} onClick={props.onClickHandler} height='100%' width='100%'/>
        </div>
    )
}

export default Image
