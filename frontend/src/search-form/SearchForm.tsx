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
        console.log(this.enabledResorts)
        console.log("=====================================")

    }

    adultsCapacityHandler(event:any){
        this.setState({
            adultsCapacity: event.target.value
        })
    }

    childrenCapacityHandler(event: any){
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
                    <PlaceOfDeparture departurePlaceHandler={this.departurePlaceHandler} />
                    <DurationOfStay stayDurationHandler={this.stayDurationHandler} />
                    <PeoplesCapacity adultsCapacityHandler={this.adultsCapacityHandler} childrenCapacityHandler={this.childrenCapacityHandler}/>
                    <DateOfDeparture value={this.state.dateOfDeparture} dateHandler={this.dateHandler} />
                    <SearchButton />
                </div>
            </form>

        )
    }
}

export default SearchForm
