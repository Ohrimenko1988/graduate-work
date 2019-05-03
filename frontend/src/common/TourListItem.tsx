import React, { Component } from 'react'

export interface TourListItemProps {
    imageSource: string
    title: string
    country: string
    resort: string
    typeOfAccommodation: string
    duration: string
    departureDate: string
    arrivalDate: string
    adultsCapacity: number
    childrenCapacity: number
    price: string
}


export default function TourListItem(props: TourListItemProps): JSX.Element {
    return (
        <div className='tour-list-item' >
            <div className='image-container item-arrea'>
                <img className='image tour-list-item-part' src={props.imageSource} alt="resort" />
            </div>
            <div className='item-arrea'>
                <div className='item-arrea-content'>
                    <div className='description'>
                        <div className='details'>
                            <div className='title tour-list-item-part'>{props.title}</div>
                            <div className='country tour-list-item-part'>{props.country}</div>
                            <div className='resort tour-list-item-part'>{props.resort}</div>
                        </div>
                        <div className='details'>
                            <div className='price tour-list-item-part'>{props.price}</div>
                            <div className='adults-capacity tour-list-item-part'>{props.adultsCapacity}</div>
                            <div className='children-capacity tour-list-item-part'>{props.childrenCapacity}</div>
                        </div>
                    </div>

                    <div className='description'>
                        <div className='details'>
                            <div className='type-of-accommodation tour-list-item-part'>{props.typeOfAccommodation}</div>
                        </div>

                        <div className='details'>
                            <div className='duration tour-list-item-part'>{props.duration}</div>
                            <div className='departure-date tour-list-item-part'>{props.departureDate}</div>
                            <div className='arrival-date tour-list-item-part'>{props.arrivalDate}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
