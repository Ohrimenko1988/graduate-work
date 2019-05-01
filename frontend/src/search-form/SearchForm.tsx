import React, { Component } from 'react'
import CountryForm from './country/CountryForm';

class SearchForm extends Component {
    render() {
        return (
            <form action="">
                <div className='searchForm'>
                    <CountryForm />
                    
                </div>
            </form>

        )
    }
}

export default SearchForm
