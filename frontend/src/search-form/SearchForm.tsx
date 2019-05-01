import React, { Component } from 'react'
import CountryForm from './country/CountryForm';
import PlaceOfDeparture from './PlaceOfDeparture';
import DurationOfStay from './DurationOfStay';
import PeoplesCapacity from './peoples-capacity/PeoplesCapacity';
import DateOfDuration from './DateOfDuration';
import SearchButton from './SearchButton';

class SearchForm extends Component<any, any> {
    private enabledResorts: Set<string> = new Set()

    constructor(props: any) {
        super(props)

        this.state = {
            country: 'none',


        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.toggleResortCheckbox = this.toggleResortCheckbox.bind(this);
        this.selectCountryHandler = this.selectCountryHandler.bind(this);
    }

    onSubmitHandler(event: any) {
        event.preventDefault()
    }


    toggleResortCheckbox = (event: any) => {
        const resortName: string = event.target.value

        if (this.enabledResorts.has(resortName)) {
            this.enabledResorts.delete(resortName)
            return
        }

        this.enabledResorts.add(resortName)
    }

    selectCountryHandler = (event: any) => {
        this.enabledResorts = new Set()
        this.setState({
            country: event.target.value
        })


    }





    render() {
        return (
            <form onSubmit={this.onSubmitHandler} >
                <div className='searchForm'>
                    <CountryForm
                        selectCountryHandler={this.selectCountryHandler}
                        toggleResortHandler={this.toggleResortCheckbox}
                        selectedCountry={this.state.country}
                    />
                    <PlaceOfDeparture />
                    <DurationOfStay />
                    <PeoplesCapacity />
                    <DateOfDuration />
                    <SearchButton />
                </div>
            </form>

        )
    }
}

export default SearchForm
