import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, Reducer, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import ResultPage from './ResultPage';
import thunk from 'redux-thunk';


// const tourListItemProps: TourListItemProps = {
//     tourLink: "",
//     imageSource: 'https://s-ec.bstatic.com/xdata/images/hotel/max500/109664921.jpg?k=6ab9cf7ddbb132caf4f206a03c6226f9f491d668722b0376db6bd42e91e3d323&o=',
//     title: 'Title',
//     country: 'Country',
//     resort: 'Resort',
//     typeOfAccommodation: 'Accom',
//     duration: 'Duration',
//     departureDate: 'Departure Date',
//     arrivalDate: 'Arrival Date',
//     adultsCapacity: 2,
//     childrenCapacity: 0,
//     price: 'Price'
// }

// function generateItemsList(): TourListItemProps[] {
//     let result: TourListItemProps[] = new Array()

//     for (let i = 0; i < 5; i++) {
//         result.push(tourListItemProps)
//     }

//     return result;
// }

interface ITest {
    text: string;
    digit: number;
}

const initialState: ITest[] = [];


const playlist: Reducer<any, any> = (state: ITest[] = initialState, action: any) => {
    if (action.type === 'ADD_TRACK') {
        return [...state, action.payload];
    }

    return state;
}



const testStore = createStore(playlist, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={testStore} >
        <Router>
            <Route exact path="/" component={App} />
            <Route exact path="/results" component={ResultPage} />
        </Router>
    </Provider>,
    document.getElementById('root'));


// ReactDOM.render(<ResultPage tours={generateItemsList()}/>, document.getElementById('root'));
// ReactDOM.render(<TourDetailsPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
