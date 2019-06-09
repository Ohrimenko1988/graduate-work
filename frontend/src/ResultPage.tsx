import React, { Component } from 'react';
import TourListItem, { TourListItemProps } from './TourListItem';
import Button from './common/Button';
import SearchForm from './search-form/SearchForm';
import ToursFilter from './filter/ToursFilter';
import { connect } from 'react-redux';
import { URL } from 'url';
import { ISearchParams } from './common/interfaces/ISearchParams';
import axios from "axios";
import { ParamsToQueriesConverter } from './ParamsToQueriesConverter';
import { AppConstants } from './AppConstants';

export interface ResultPageState {
    tours: TourListItemProps[];
}

class ResultPage extends Component<any, ResultPageState> {
    private static readonly SEARCH_TOUR_REQUEST_URL: string = `${AppConstants.BASE_REQUEST_URL}${AppConstants.SEARCH_TOURS_URI}`;

    constructor(props: any) {
        super(props)

        this.state = {
            tours: []
        }

    }

    generateItemsList(): TourListItemProps[] {
        let result: TourListItemProps[] = new Array()

        const tourListItemProps: TourListItemProps = {
            tourLink: "",
            imageSource: 'https://s-ec.bstatic.com/xdata/images/hotel/max500/109664921.jpg?k=6ab9cf7ddbb132caf4f206a03c6226f9f491d668722b0376db6bd42e91e3d323&o=',
            title: 'Отель Anthea Hotel Apartments Class "A"',
            country: 'Кипр',
            resort: '(Айя-Напа)',
            typeOfAccommodation: 'SC',
            duration: '5',
            departureDate: '11.06.2019',
            arrivalDate: 'Arrival Date',
            adultsCapacity: 1,
            childrenCapacity: 0,
            price: '6 053 UAH'
        }

        for (let i = 0; i < 5; i++) {
            result.push(tourListItemProps)
        }

        return result;
    }

    componentWillMount() {
        const queriesParams = new URLSearchParams(window.location.search)
        const searchParams: ISearchParams = this.getSearchParamsFromQueries(queriesParams);
        console.log("Search params \n", searchParams);

        const requestUrlWithQueries: string = ResultPage.SEARCH_TOUR_REQUEST_URL + ParamsToQueriesConverter.parse(searchParams);
        console.log("Request URL with queries \n", requestUrlWithQueries);

        // axios.get(requestUrlWithQueries).then(resp => {
        //     console.log("Responce data \n", resp.data);
        //     this.setState({
        //         tours: resp.data
        //     })
        // })

        this.setState({
            tours: this.generateItemsList()
        })

        // axios.get("http://localhost:8080/search").then(resp => {
        //     console.log("Responce data \n", resp.data);
        //     this.setState({
        //         tours: resp.data
        //     })
        // })

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
                    <div className='content-item filter-arrea'> <ToursFilter /> </div>
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

