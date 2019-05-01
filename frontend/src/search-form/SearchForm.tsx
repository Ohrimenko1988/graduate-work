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
            date: new Date()


        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.toggleResortCheckbox = this.toggleResortCheckbox.bind(this);
        this.selectCountryHandler = this.selectCountryHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this)

    }

    onSubmitHandler(event: any) {
        event.preventDefault()
    }

    dateHandler(date: any) {
        console.log("==>>>", date)
        this.setState({
            date
        })
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
                    <DateOfDuration value={this.state.date} dateHandler={this.dateHandler} />
                    <SearchButton />
                </div>
            </form>

        )
    }
}

export default SearchForm
