import React, { Component } from 'react'
import Checkbox, { CheckboxProps } from '../common/Checkbox';

interface ToursFilterStats {
    hotelCategories: Set<number>;
    accommodations: Set<string>;
}

export default class ToursFilter extends Component<any, ToursFilterStats> {
    constructor(props: any) {
        super(props)

        this.state = {
            hotelCategories: new Set(),
            accommodations: new Set()

        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeStarsHandler = this.onChangeStarsHandler.bind(this);
        this.onChangeAccommodationHandler = this.onChangeAccommodationHandler.bind(this);

    }

    onSubmitHandler(event: any) {
        event.preventDefault();
        console.log("==================")
        console.log(this.state)
        console.log("==================")
    }

    onChangeStarsHandler(event: any) {
        let selectedStars: Set<number> = this.state.hotelCategories;
        let selectedValue: string = event.target.value;
        let starValue: number = Number.parseInt(selectedValue);

        let isStarAlreadySelected: boolean = selectedStars.has(starValue);

        if (isStarAlreadySelected) {
            selectedStars.delete(starValue)
        }

        if (!isStarAlreadySelected) {
            selectedStars.add(starValue)
        }

        this.setState({
            hotelCategories: selectedStars
        })
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

    createHotelCategories() {
        return [1, 2, 3, 4, 5].map(stars => {
            let checkboxProps: CheckboxProps = {
                name: `${stars}*`,
                key: `${stars}star`,
                defaultChecked: false,
                onChangeHandler: this.onChangeStarsHandler
            }

            return <Checkbox {...checkboxProps} />
        })
    }

    createAccommodationCategories() {
        return ["OB", "BB", "HB", "FB", "AI", "UAI"].map(accommodation => {
            let checkboxProps: CheckboxProps = {
                name: accommodation,
                key: accommodation,
                defaultChecked: false,
                onChangeHandler: this.onChangeAccommodationHandler
            }

            return <Checkbox {...checkboxProps} />
        })
    }

    render() {
        return (
            <div>
                <form className='tours-filter' onSubmit={this.onSubmitHandler}>


                    <div className='filter-item header'>
                        <div className='title'>Filters</div>
                        <div className='submit-button'>
                            <button>Submit</button>
                        </div>
                    </div>

                    <div className='filter-item'>
                        <div className='hotel-category'>
                            <div className='title'>Hotel Category</div>
                            <div className='checkboxes'> {this.createHotelCategories()} </div>
                        </div>
                    </div>

                    <div className='filter-item'>
                        <div className='accommodation'>
                            <div className='title'>Accommodation Type</div>
                            <div className='checkboxes'> {this.createAccommodationCategories()} </div>
                        </div>
                    </div>



                    <div className='filter-item price'>Price</div>
                    <div className='filter-item services'>Services</div>
                    <div className='filter-item submit'>Submit</div>



                </form>
            </div>
        )
    }
}

