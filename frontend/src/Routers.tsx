import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import App from './App';
import ResultPage from './ResultPage';

class Routers extends Component<any, any> {
    constructor (props:any) {
        super(props);
    }
    

    

    render () {
        return (

            <Router>
                <Route exact path="/" component={App}/>
                <Route exact path="/results" component={ResultPage}/>
            </Router>
        )
    }
}

export default Routers