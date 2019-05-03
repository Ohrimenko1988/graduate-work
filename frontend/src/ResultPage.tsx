import React, { Component } from 'react';
import { TourListItemProps } from './common/TourListItem';
import Button from './common/Button';
import SearchForm from './search-form/SearchForm';

export interface ResultPageProps {

}

class ResultPage extends Component<any, any> {
    constructor(props: ResultPageProps) {
        super(props)

        this.state = {

        }



    }



    render() {
        return (
            <div className='app-body-arrea'>
                <div className='header-arrea arrea-item'>Header</div>

                <div className='search-form-arrea arrea-item' >
                    <SearchForm />
                </div>



                <div className='main-content arrea-item'>


                    <div className='content-item left-comercial-arrea'>Left Commercial</div>

                    <div className='content-item filter-arrea'>Filter Arrea</div>

                    <div className='content-item content-arrea'>Content Arrea</div>

                    <div className='content-item right-comercial-arrea'>RightCommercial</div>


                </div>

                <div className='footer-arrea arrea-item'>Footer</div>
            </div>

        )
    }
}

export default ResultPage

