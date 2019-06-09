import React, { Component } from 'react';
import TourListItem, { TourListItemProps } from './TourListItem';
import SearchForm from './search-form/SearchForm';
import ToursFilter from './filter/ToursFilter';
import { connect } from 'react-redux';
import { ISearchParams } from './common/interfaces/ISearchParams';
import axios from "axios";
import { ParamsToQueriesConverter } from './ParamsToQueriesConverter';
import { AppConstants } from './AppConstants';

export interface ResultPageState {
    tours: TourListItemProps[];
    beginningToursState: TourListItemProps[];
    isFiltersAccepted: boolean;
    accommodations: Set<string>;
    minimumPriceRange: number;
    maximumPriceRange: number;
}

class ResultPage extends Component<any, ResultPageState> {
    private static readonly SEARCH_TOUR_REQUEST_URL: string = `${AppConstants.BASE_REQUEST_URL}${AppConstants.SEARCH_TOURS_URI}`;

    constructor(props: any) {
        super(props)

        this.state = {
            tours: [],
            beginningToursState: [],
            isFiltersAccepted: false,
            accommodations: new Set(),
            minimumPriceRange: 0,
            maximumPriceRange: 1000000
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeAccommodationHandler = this.onChangeAccommodationHandler.bind(this);
        this.onChangeMinPriceRange = this.onChangeMinPriceRange.bind(this);
        this.onChangeMaxPriceRange = this.onChangeMaxPriceRange.bind(this);
        this.onRejectFiltersListener = this.onRejectFiltersListener.bind(this);
    }

    onSubmitHandler(event: any) {
        let temporaryTours: TourListItemProps[] = [];

        // save tours state before filtering
        if (!this.state.isFiltersAccepted) {
            this.setState({
                beginningToursState: this.state.tours,
                isFiltersAccepted: true
            })
        }

        if (this.state.accommodations.size === 0) {
            temporaryTours = this.state.tours;
        }

        // filter by accommodation type
        if (this.state.accommodations.size > 0) {
            this.state.accommodations
                .forEach((accommodationType: string) => {
                    temporaryTours.concat(this.state.tours.filter((tour: TourListItemProps) => {
                        return accommodationType === tour.accommodation;
                    }));
                })
        }

        // filter by price
        temporaryTours = temporaryTours.filter((tour: TourListItemProps) => {
            const tourPrice: number = Number.parseInt(tour.price, 10);

            return (this.state.minimumPriceRange < tourPrice) && (this.state.maximumPriceRange > tourPrice);
        });

        // display result
        this.setState({
            tours: temporaryTours
        })

        event.preventDefault();
    }

    onChangeAccommodationHandler(event: any) {
        let selectedAccommodations: Set<string> = this.state.accommodations;
        let selectedValue: string = event.target.value;

        let isAccommodationAlreadySelected: boolean = selectedAccommodations.has(selectedValue);

        if (isAccommodationAlreadySelected) {
            selectedAccommodations.delete(selectedValue)
        }

        if (!isAccommodationAlreadySelected) {
            selectedAccommodations.add(selectedValue)
        }

        this.setState({
            accommodations: selectedAccommodations
        })
    }

    onChangeMinPriceRange(event: any) {
        const defaultMinRange: number = 0;
        let value: string = event.target.value;
        let parsedValue: number;

        if (!value) {
            parsedValue = defaultMinRange;
        }

        try {
            parsedValue = Number.parseInt(value, 10)
        } catch (err) {
            parsedValue = defaultMinRange;
        }

        if (Number.isNaN(parsedValue)) {
            parsedValue = defaultMinRange;
        }

        if (parsedValue < defaultMinRange) {
            parsedValue = defaultMinRange;
        }

        this.setState({
            minimumPriceRange: parsedValue
        })
    }

    onChangeMaxPriceRange(event: any) {
        const defaultMinRange: number = 0;
        const defaultMaxRange: number = 1000000;
        let value: string = event.target.value;
        let parsedValue: number;

        if (!value) {
            parsedValue = defaultMaxRange;
        }

        try {
            parsedValue = Number.parseInt(value, 10)
        } catch (err) {
            parsedValue = 0;
        }

        if (Number.isNaN(parsedValue)) {
            parsedValue = defaultMinRange;
        }

        if (parsedValue > defaultMaxRange) {
            parsedValue = defaultMaxRange
        }

        this.setState({
            maximumPriceRange: parsedValue
        })
    }

    onRejectFiltersListener(event: any) {
        this.setState({
            tours: this.state.beginningToursState,
            isFiltersAccepted: false
        })
    }

    componentWillMount() {
        const queriesParams = new URLSearchParams(window.location.search)
        const searchParams: ISearchParams = this.getSearchParamsFromQueries(queriesParams);
        const requestUrlWithQueries: string = ResultPage.SEARCH_TOUR_REQUEST_URL + ParamsToQueriesConverter.parse(searchParams);

        axios.get(requestUrlWithQueries).then(resp => {
            this.setState({
                tours: resp.data
            });

            if (this.state.tours.length === 0) {
                window.alert("На жаль за заданими параметрами пошуку нічого не знайдено, спробуйте змінити параметри та спробуйте знову");
            }
        })
    }

    private getSearchParam(queriesParams: URLSearchParams, param: string): string {
        const result: string | null = queriesParams.get(param);

        if (!result) {
            console.log("Wrong search parameter");
            return "";
        }

        return result;
    }

    renderTours() {
        return this.state.tours.map(tour => {
            return <TourListItem  {...tour} />
        })
    }

    private getSearchParamsFromQueries(queriesParams: URLSearchParams): ISearchParams {
        return {
            accomodation: this.getSearchParam(queriesParams, "accomodation").split(","),
            adultsCapacity: Number.parseInt(this.getSearchParam(queriesParams, "adultsCapacity"), 10),
            childrenCapacity: Number.parseInt(this.getSearchParam(queriesParams, "childrenCapacity"), 10),
            country: this.getSearchParam(queriesParams, "country"),
            dateOfDeparture: this.getSearchParam(queriesParams, "dateOfDeparture"),
            dateOfArrival: this.getSearchParam(queriesParams, "dateOfArrival"),
            durationOfStay: Number.parseInt(this.getSearchParam(queriesParams, "durationOfStay"), 10),
            placeOfDeparture: this.getSearchParam(queriesParams, "placeOfDeparture"),
            resorts: this.getSearchParam(queriesParams, "resorts").split(","),
            stars: this.getSearchParam(queriesParams, "stars").split(",")
        }
    }

    render() {
        return (
            <div className='result-page'>
                <div className='header-arrea arrea-item'>Header</div>
                <div className='search-form-arrea arrea-item' > <SearchForm /> </div>
                <div className='main-content arrea-item'>
                    <div className='content-item left-comercial-arrea'></div>
                    <div className='content-item filter-arrea'>
                        <ToursFilter
                            onSubmitHandler={this.onSubmitHandler}
                            onChangeAccommodationHandler={this.onChangeAccommodationHandler}
                            onChangeMinPriceRange={this.onChangeMinPriceRange}
                            onChangeMaxPriceRange={this.onChangeMaxPriceRange}
                            minimumPriceRange={this.state.minimumPriceRange}
                            maximumPriceRange={this.state.maximumPriceRange}
                        />
                        <button onClick={this.onRejectFiltersListener}>Reject Filters</button>
                    </div>
                    <div className='content-item content-arrea'> {this.renderTours()} </div>
                    <div className='content-item right-comercial-arrea'></div>
                </div>
                <div className='footer-arrea arrea-item'>Footer</div>
            </div>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(ResultPage);
