import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ResultPage from './ResultPage';
import { TourListItemProps } from './search-form/TourListItem';
import TourDetailsPage from './TourDetailsPage';

const tourListItemProps: TourListItemProps = {
    imageSource: 'https://s-ec.bstatic.com/xdata/images/hotel/max500/109664921.jpg?k=6ab9cf7ddbb132caf4f206a03c6226f9f491d668722b0376db6bd42e91e3d323&o=',
    title: 'Title',
    country: 'Country',
    resort: 'Resort',
    typeOfAccommodation: 'Accom',
    duration: 'Duration',
    departureDate: 'Departure Date',
    arrivalDate: 'Arrival Date',
    adultsCapacity: 2,
    childrenCapacity: 0,
    price: 'Price'
  }

function generateItemsList(): TourListItemProps[]{
    let result: TourListItemProps[] = new Array()

    for(let i = 0; i < 5; i++){
        result.push(tourListItemProps)
    }

    return result;
}

// ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<ResultPage tours={generateItemsList()}/>, document.getElementById('root'));
ReactDOM.render(<TourDetailsPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
