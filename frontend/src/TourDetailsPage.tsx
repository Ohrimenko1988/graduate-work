import React, { Component } from 'react'
import SearchForm from './search-form/SearchForm';
import ImageSlider, { ImageSliderProps } from './common/ImageSlider';
import { ImageProps } from './common/Image';

const TourDetailsPage: React.FC = () => {
    function generateImagesList(): ImageProps[]{
        let result: ImageProps[] = new Array();
        
        result.push({
            alt: 'first slide',
            className: 'first-slide',
            draggable: false,
            src: 'https://s-ec.bstatic.com/images/hotel/max1024x768/559/55927125.jpg'
        })

        result.push({
            alt: 'second slide',
            className: 'second-slide',
            draggable: false,
            src: 'https://assets3.thrillist.com/v1/image/2781290/size/tmg-facebook_social.jpg'
        })

        result.push({
            alt: 'third slide',
            className: 'third-slide',
            draggable: false,
            src: 'https://www.majestic-resorts.com/en/dms/multiHotel-MajesticResorts/home/homeColonialHotel.jpg'
        })

        result.push({
            alt: 'fourth slide',
            className: 'fourth-slide',
            draggable: false,
            src: 'http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/08/great-mount-resort-executive-deluxe-cottage-kw-260817-The-executive-deluxe-cottages-at-the-Great-Mount-Resort-near-Coimbatore.jpg'
        })


        return result
    }

    const imageSliderProps: ImageSliderProps = {
        className: 'tour-details-image-slider',
        images: generateImagesList()
    }

    return (
        <div className='tour-details-page'>
            <div className='arrea-item header-arrea'>Header</div>
            <div className='arrea-item search-form-arrea' > <SearchForm /> </div>
            <div className='arrea-item main-content'>
                <div className='content-item left-comercial-side'>Left comercial side</div>
                <div className='content-item content-arrea'>
                    <div className='content-arrea-line'>
                        <div className='content-arrea-item photos'> <ImageSlider {... imageSliderProps} /> </div>
                        <div className='content-arrea-item tour-information'>Tour Information</div>
                    </div>
                    <div className='content-arrea-line'>
                        <div className='content-arrea-item hotel-description'>Hotel Description</div>
                        <div className='content-arrea-item sellers'>Sellers</div>
                    </div>
                </div>

                <div className='content-item right-comercial-side'>Right comercial side</div>
            </div>
            <div className='arrea-item footer-arrea'>Footer</div>
        </div>
    )
}

export default TourDetailsPage
