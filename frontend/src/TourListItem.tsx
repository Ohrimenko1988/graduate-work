import React, { Component } from 'react'
import { Redirect } from 'react-router';

export interface TourListItemProps {
    tourLink: string;
    imageSource: string;
    title: string;
    country: string;
    resort: string;
    typeOfAccommodation: string;
    duration: string;
    departureDate: string;
    arrivalDate: string;
    adultsCapacity: number;
    childrenCapacity: number;
    price: string;
}

export default function TourListItem(props: TourListItemProps): JSX.Element {
    function onClickHandler(event: any) {
        window.open(props.tourLink);
    }

    return (
        <div className='tour-list-item' >
            <div className='image-container item-arrea' onClick={onClickHandler}>
                <img className='image tour-list-item-part' src={props.imageSource} alt="resort" />
            </div>
            <div className='item-arrea'>
                <div className='item-arrea-content'>
                    <div className='description'>
                        <div className='details left'>
                            <div className='descriptionText'>Готель</div>
                            <div className='title tour-list-item-part'>{props.title}</div>
                            <div className='descriptionText'>Країна</div>
                            <div className='country tour-list-item-part'>{props.country}</div>
                            <div className='descriptionText'>Курорт</div>
                            <div className='resort tour-list-item-part'>{props.resort}</div>
                        </div>
                        <div className='details right'>
                            <div className='descriptionText'>Ціна</div>
                            <div className='price tour-list-item-part'>{props.price}</div>
                            <div className='descriptionText'>Дорослі</div>
                            <div className='adults-capacity tour-list-item-part'>{props.adultsCapacity}</div>
                            <div className='descriptionText'>Діти</div>
                            <div className='children-capacity tour-list-item-part'>{props.childrenCapacity}</div>
                        </div>
                    </div>

                    <div className='description'>
                        <div className='details left'>
                            <div className='descriptionText'>Тип перебування</div>
                            <div className='type-of-accommodation tour-list-item-part'>{props.typeOfAccommodation}</div>
                        </div>

                        <div className='details right'>
                            <div className='descriptionText'>Тривалість</div>
                            <div className='duration tour-list-item-part'>{props.duration}</div>
                            <div className='descriptionText'>Відправлення</div>
                            <div className='departure-date tour-list-item-part'>{props.departureDate} р.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
