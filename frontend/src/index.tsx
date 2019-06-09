import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, Reducer, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import ResultPage from './ResultPage';
import thunk from 'redux-thunk';

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
            <Route exact path="/" component={MainPage} />
            <Route exact path="/results" component={ResultPage} />
        </Router>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
