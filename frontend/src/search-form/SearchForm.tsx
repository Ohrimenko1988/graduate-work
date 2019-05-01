import React, { Component } from 'react'
import CountryForm from './country/CountryForm';
import PlaceOfDeparture from './PlaceOfDeparture';
import DurationOfStay from './DurationOfStay';

class SearchForm extends Component {
    render() {
        return (
            <form action="">
                <div className='searchForm'>
                    <CountryForm />
                    <PlaceOfDeparture/>
                    <DurationOfStay/>
                    
                </div>
            </form>

        )
    }
}

export default SearchForm
