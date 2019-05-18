import React, { Component } from 'react';
import TourListItem, { TourListItemProps } from './search-form/TourListItem';
import Button from './common/Button';
import SearchForm from './search-form/SearchForm';
import ToursFilter from './filter/ToursFilter';
import {connect} from 'react-redux';

// export interface ResultPageProps {
//     tours?: TourListItemProps[];
// }

export interface ResultPageState {
    tours: TourListItemProps[];
}

class ResultPage extends Component<any, ResultPageState> {
    constructor (props:any) {
        super(props)
        
        this.state = {
            tours: new Array<TourListItemProps>()
        }

    }
    
    componentWillMount(){
        console.log("===>>>", this.props.testStore)       
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


                    <div className='content-item left-comercial-arrea'>Left Commercial</div>

                    <div className='content-item filter-arrea'> <ToursFilter /> </div>

                    <div className='content-item content-arrea'> {this.renderTours()} </div>

                    <div className='content-item right-comercial-arrea'>RightCommercial</div>


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

