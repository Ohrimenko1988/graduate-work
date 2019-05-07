import React, { Component } from 'react'
import CountryForm from './country/CountryForm';
import PlaceOfDeparture from './PlaceOfDeparture';
import DurationOfStay from './DurationOfStay';
import PeoplesCapacity from './peoples-capacity/PeoplesCapacity';
import DateOfDeparture from './DateOfDeparture';
import SearchButton from './SearchButton';

class SearchForm extends Component<any, any> {
    private enabledResorts: Set<string> = new Set()

    constructor(props: any) {
        super(props)

        this.state = {
            country: 'none',
            resorts: [],
            dateOfDeparture: new Date(),
            placeOfDeparture: 'none',
            durationOfStay: 1,
            adultsCapacity: 1,
            childrenCapacity: 0

        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.toggleResortCheckbox = this.toggleResortCheckbox.bind(this);
        this.selectCountryHandler = this.selectCountryHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this)
        this.departurePlaceHandler = this.departurePlaceHandler.bind(this)
        this.stayDurationHandler = this.stayDurationHandler.bind(this)
        this.adultsCapacityHandler = this.adultsCapacityHandler.bind(this);
        this.childrenCapacityHandler = this.childrenCapacityHandler.bind(this);
    }

    onSubmitHandler(event: any) {
        event.preventDefault()

        console.log("=====================================")
        console.log(this.state)
        console.log("=====================================")

    }

    adultsCapacityHandler(event: any) {
        this.setState({
            adultsCapacity: event.target.value
        })
    }

    childrenCapacityHandler(event: any) {
        this.setState({
            childrenCapacity: event.target.value
        })
    }

    departurePlaceHandler(event: any) {
        this.setState({
            placeOfDeparture: event.target.value
        })
    }

    stayDurationHandler(event: any) {
        this.setState({
            durationOfStay: event.target.value
        })

    }

    dateHandler(dateOfDeparture: any) {
        this.setState({
            dateOfDeparture
        })
    }

    toggleResortCheckbox = (event: any) => {
        const resortName: string = event.target.value

        if (this.enabledResorts.has(resortName)) {
            this.enabledResorts.delete(resortName)
            this.setState({
                resorts: this.enabledResorts
            })

            return
        }

        this.enabledResorts.add(resortName)
        this.setState({
            resorts: this.enabledResorts
        })
    }

    selectCountryHandler = (event: any) => {
        this.enabledResorts = new Set()
        this.setState({
            country: event.target.value,
            resorts: this.enabledResorts
        })
    }

    render() {
        return (
            <form className='form-search-form' onSubmit={this.onSubmitHandler} >
                <div className='search-form'>
                    <CountryForm
                        selectCountryHandler={this.selectCountryHandler}
                        toggleResortHandler={this.toggleResortCheckbox}
                        selectedCountry={this.state.country}
                        className='country-form search-form-item'
                    />

                    <PlaceOfDeparture
                        departurePlaceHandler={this.departurePlaceHandler}
                        className='departure-place search-form-item'
                    />

                    <DurationOfStay
                        stayDurationHandler={this.stayDurationHandler}
                        className='stay-duration search-form-item'
                    />

                    <PeoplesCapacity
                        adultsCapacityHandler={this.adultsCapacityHandler}
                        childrenCapacityHandler={this.childrenCapacityHandler}
                        className='peoples-capacity search-form-item'
                    />

                    <DateOfDeparture
                        value={this.state.dateOfDeparture}
                        dateHandler={this.dateHandler}
                        className='departure-date search-form-item'
                    />

                    <SearchButton className='search-button search-form-item' />
                </div>
            </form>
        )
    }
}

export default SearchForm
