import React, { Component } from 'react'
import Image, { ImageProps } from './Image';

export interface ImageSliderProps{
    className: string;
    images: ImageProps[];
}

interface ImageSliderStates {
    images: ImageProps[];
    currentImageIndex: number;
    imagesCapacity: number;
}

export default class ImageSlider extends Component <ImageSliderProps, ImageSliderStates> {
    constructor (props: ImageSliderProps) {
        super(props)
        
        this.state = {
            images: this.props.images,
            currentImageIndex: 0,
            imagesCapacity: this.props.images.length
        }

        this.onClickImageHandler = this.onClickImageHandler.bind(this);
        this.onClickBackButtonHandler = this.onClickBackButtonHandler.bind(this);
    }
   
    onClickImageHandler(){
        let currentIndex: number = this.state.currentImageIndex
        let minIndex: number = 0;
        let maxIndex: number = this.state.imagesCapacity - 1;

        if(currentIndex === maxIndex){
            this.setState({
                currentImageIndex: minIndex
            })

            return;
        }

        this.setState({
            currentImageIndex: currentIndex + 1
        }) 
    }

    onClickBackButtonHandler(){
        let currentIndex: number = this.state.currentImageIndex
        let minIndex: number = 0;
        let maxIndex: number = this.state.imagesCapacity - 1;

        if(currentIndex === minIndex){
            this.setState({
                currentImageIndex: maxIndex
            })

            return;
        }

        this.setState({
            currentImageIndex: currentIndex - 1
        })
    }

    getCurrentImageProps(): ImageProps{
        let currentIndex: number = this.state.currentImageIndex;
        let imageProps: ImageProps = this.state.images[currentIndex];
        
        imageProps.onClickHandler = this.onClickImageHandler;
        return imageProps;
    }

    render () {
        return (
            <div className={`image-slider ${this.props.className}`}>
                <Image {... this.getCurrentImageProps()}/>
                <div className='navigation-container'>
                    <button onClick={this.onClickBackButtonHandler} className='navigation-button back-button'>{'<<<<<<'}</button>
                    <button onClick={this.onClickImageHandler} className='navigation-button forward-button'>{'>>>>>>'}</button>
                </div>
                <div className='images-counter'>
                {`Image ${this.state.currentImageIndex + 1} of ${this.state.imagesCapacity}`}
                </div>
            </div>
        )
    }
}
