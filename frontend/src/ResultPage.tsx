import React, { Component } from 'react';
import TourListItem, { TourListItemProps } from './search-form/TourListItem';
import Button from './common/Button';
import SearchForm from './search-form/SearchForm';
import ToursFilter from './filter/ToursFilter';
import { connect } from 'react-redux';
import { URL } from 'url';
import { ISearchParams } from './common/interfaces/ISearchParams';
import axios from "axios";
import { ParamsToQueriesConverter } from './ParamsToQueriesConverter';


// export interface ResultPageProps {
//     tours?: TourListItemProps[];
// }

export interface ResultPageState {
    tours: TourListItemProps[];
}

class ResultPage extends Component<any, ResultPageState> {
    constructor(props: any) {
        super(props)

        this.state = {
            tours: this.generateItemsList()
        }

    }

    generateItemsList(): TourListItemProps[] {
        let result: TourListItemProps[] = new Array()
        const tourListItemProps: TourListItemProps = {
            tourLink: "",
            imageSource: 'https://s-ec.bstatic.com/xdata/images/hotel/max500/109664921.jpg?k=6ab9cf7ddbb132caf4f206a03c6226f9f491d668722b0376db6bd42e91e3d323&o=',
            title: 'Title',
            country: 'Country',
            resort: 'Resort',
            typeOfAccommodation: 'Accom',
            duration: 'Duration',
            departureDate: 'Departure Date',
            arrivalDate: 'Arrival Date',
            adultsCapacity: 2,
            childrenCapacity: 0,
            price: 'Price'
        }

        for (let i = 0; i < 5; i++) {
            result.push(tourListItemProps)
        }

        return result;
    }

    componentWillMount() {
        const queriesParams = new URLSearchParams(window.location.search)
        const searchParams: ISearchParams = {
            accomodation: this.getSearchParam(queriesParams, "accomodation").split(","),
            adultsCapacity: Number.parseInt(this.getSearchParam(queriesParams, "adultsCapacity"), 10),
            childrenCapacity: Number.parseInt(this.getSearchParam(queriesParams, "childrenCapacity"), 10),
            country: this.getSearchParam(queriesParams, "country"),
            dateOfDeparture: this.getSearchParam(queriesParams, "dateOfDeparture"),
            dateOfArrival: this.getSearchParam(queriesParams, "dateOfArrival"),
            durationOfStay: Number.parseInt(this.getSearchParam(queriesParams, "durationOfStay"), 10),
            placeOfDeparture: this.getSearchParam(queriesParams, "placeOfDeparture"),
            resorts: this.getSearchParam(queriesParams, "resorts").split(","),
            stars: this.getSearchParam(queriesParams, "placeOfDeparture").split(",")
        }




        console.log("===>>>", window.location.search);
        let params = new URLSearchParams(window.location.search)
        console.log("===>>>", params.get("accomodation"));
        console.log("===>>>", searchParams);

        const requestUrlWithQueries: string = "http://localhost:8080/search" + ParamsToQueriesConverter.parse(searchParams);
        console.log("===>>>", requestUrlWithQueries);
        
        axios.get(requestUrlWithQueries).then(resp => {
            console.log(resp.data);
            this.setState({
                tours: resp.data
            })
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

