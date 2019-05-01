import React, { Component } from 'react'
import CountryForm from './country/CountryForm';
import PlaceOfDeparture from './PlaceOfDeparture';

class SearchForm extends Component {
    render() {
        return (
            <form action="">
                <div className='searchForm'>
                    <CountryForm />
                    <PlaceOfDeparture/>
                    
                </div>
            </form>

        )
    }
}

export default SearchForm
