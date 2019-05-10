import React, { Component } from 'react'
import CountryForm from './country/CountryForm';
import PlaceOfDeparture from './PlaceOfDeparture';
import DurationOfStay from './DurationOfStay';
import PeoplesCapacity from './peoples-capacity/PeoplesCapacity';
import DateOfDeparture from './DateOfDeparture';
import SearchButton from './SearchButton';
import { ISearchParams } from '../common/interfaces/ISearchParams';
import { ParamsToQueriesConverter } from '../ParamsToQueriesConverter';
import { DateParser } from '../common/DateParser';
import Accomodation from './Accomodation';
import Stars from './Stars';

interface ISearcFormState {
    country: string,
    resorts: string[],
    dateOfDeparture: Date,
    dateOfArrival: Date,
    placeOfDeparture: string,
    accomodation: string[],
    stars: string[],
    durationOfStay: number,
    adultsCapacity: number,
    childrenCapacity: number
}

class SearchForm extends Component<any, ISearcFormState> {
    private enabledResorts: Set<string> = new Set()

    constructor(props: any) {
        super(props)

        this.state = {
            country: 'none',
            resorts: [],
            dateOfDeparture: new Date(),
            dateOfArrival: new Date(),
            placeOfDeparture: 'none',
            accomodation: [],
            stars: [],
            durationOfStay: 1,
            adultsCapacity: 1,
            childrenCapacity: 0

        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.toggleResortCheckbox = this.toggleResortCheckbox.bind(this);
        this.selectCountryHandler = this.selectCountryHandler.bind(this);
        this.departureDateHandler = this.departureDateHandler.bind(this)
        this.arrivalDateHandler = this.arrivalDateHandler.bind(this);
        this.departurePlaceHandler = this.departurePlaceHandler.bind(this)
        this.stayDurationHandler = this.stayDurationHandler.bind(this)
        this.adultsCapacityHandler = this.adultsCapacityHandler.bind(this);
        this.childrenCapacityHandler = this.childrenCapacityHandler.bind(this);
        this.accomodationHandler = this.accomodationHandler.bind(this);
        this.hotelCategoriesHandler = this.hotelCategoriesHandler.bind(this);
    }

    onSubmitHandler(event: any) {
        event.preventDefault()

        console.log("=====================================")
        console.log(this.state)
        console.log("=====================================")

        const params: ISearchParams = {
            accomodation: this.state.accomodation,
            adultsCapacity: this.state.adultsCapacity,
            childrenCapacity: this.state.childrenCapacity,
            country: this.state.country,
            dateOfDeparture: DateParser.parse(this.state.dateOfDeparture),
            dateOfArrival: DateParser.parse(this.state.dateOfArrival),
            durationOfStay: this.state.durationOfStay,
            placeOfDeparture: this.state.placeOfDeparture,
            resorts: this.state.resorts,
            stars: this.state.stars,
        }

        console.log(ParamsToQueriesConverter.parse(params));
        console.log(DateParser.parse(this.state.dateOfDeparture));
    }

    hotelCategoriesHandler(event: any) {
        const changedHotelCategory: string = event.target.value;
        let selectedCategory: Array<string> = new Array();
        selectedCategory.push(changedHotelCategory);

        this.setState({
            stars: selectedCategory
        });
    }

    accomodationHandler(event: any) {
        const changedAccomodation: string = event.target.value;
        let selectedAccomodations: Set<string> = new Set(this.state.accomodation);

        const isAccomodationAlreadySelected: boolean = selectedAccomodations.has(changedAccomodation);

        if (isAccomodationAlreadySelected) {
            selectedAccomodations.delete(changedAccomodation);
        }

        if (!isAccomodationAlreadySelected) {
            selectedAccomodations.add(changedAccomodation);
        }

        this.setState({
            accomodation: Array.from(selectedAccomodations.keys())
        });
    }

    adultsCapacityHandler(event: any) {
        this.setState({
            adultsCapacity: Number.parseInt(event.target.value, 10)
        })
    }

    childrenCapacityHandler(event: any) {
        this.setState({
            childrenCapacity: Number.parseInt(event.target.value, 10)
        })
    }

    departurePlaceHandler(event: any) {
        this.setState({
            placeOfDeparture: event.target.value
        })
    }

    stayDurationHandler(event: any) {
        this.setState({
            durationOfStay: Number.parseInt(event.target.value, 10)
        })

    }

    departureDateHandler(dateOfDeparture: any) {
        this.setState({
            dateOfDeparture
        })
    }

    arrivalDateHandler(dateOfArrival: any) {
        this.setState({
            dateOfArrival
        })
    }

    toggleResortCheckbox = (event: any) => {
        const resortName: string = event.target.value

        if (this.enabledResorts.has(resortName)) {
            this.enabledResorts.delete(resortName)
            this.setState({
                resorts: Array.from(this.enabledResorts.keys())
            })

            return
        }

        this.enabledResorts.add(resortName)
        this.setState({
            resorts: Array.from(this.enabledResorts.keys())
        })
    }

    selectCountryHandler = (event: any) => {
        this.enabledResorts = new Set()
        this.setState({
            country: event.target.value,
            resorts: Array.from(this.enabledResorts.keys())
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
                        dateHandler={this.departureDateHandler}
                        className='departure-date search-form-item'
                    />

                    <DateOfDeparture
                        value={this.state.dateOfArrival}
                        dateHandler={this.arrivalDateHandler}
                        className='arrival-date search-form-item'
                    />

                    <Accomodation {... {
                        className: "accomodation-types search-form-item",
                        onChangeHandler: this.accomodationHandler
                    }}
                    />

                    <Stars {... {
                        className: "hotel-category search-form-item",
                        onChangeHandler: this.hotelCategoriesHandler
                    }}
                    />

                    <SearchButton className='search-button search-form-item' />
                </div>
            </form>
        )
    }
}

export default SearchForm
