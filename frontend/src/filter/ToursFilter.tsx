import React, { Component } from 'react'
import Checkbox, { CheckboxProps } from '../common/Checkbox';
import PriceRange, { PriceRangeProps } from './PriceRange';
import Services, { ServicesProps } from './Sevices';

interface ToursFilterStats {
    hotelCategories: Set<number>;
    accommodations: Set<string>;
    services: Set<string>;
    minimumPriceRange: number;
    maximumPriceRange: number;
}

export default class ToursFilter extends Component<any, ToursFilterStats> {
    constructor(props: any) {
        super(props)

        this.state = {
            hotelCategories: new Set(),
            accommodations: new Set(),
            services: new Set(),
            minimumPriceRange: 0,
            maximumPriceRange: 1000000

        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeStarsHandler = this.onChangeStarsHandler.bind(this);
        this.onChangeAccommodationHandler = this.onChangeAccommodationHandler.bind(this);
        this.onChangeMinPriceRange = this.onChangeMinPriceRange.bind(this);
        this.onChangeMaxPriceRange = this.onChangeMaxPriceRange.bind(this);
        this.onChangeServicesCheckboxHandler = this.onChangeServicesCheckboxHandler.bind(this);
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

    onChangeMinPriceRange(event: any) {
        const defaultMinRange: number = 0;
        let value: string = event.target.value;
        let parsedValue: number;

        if (!value) {
            parsedValue = defaultMinRange;
        }

        try {
            parsedValue = Number.parseInt(value)
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
            parsedValue = Number.parseInt(value)
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

    onChangeServicesCheckboxHandler(event: any) {
        let services: Set<string> = this.state.services;
        let value: string = event.target.value;

        let isServicePresent: boolean = services.has(value);

        if (isServicePresent) {
            services.delete(value)
        }

        if (!isServicePresent) {
            services.add(value)
        }

        this.setState({
            services: services
        })
    }

    private createHotelCategories() {
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

    private createAccommodationCategories() {
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

    private getPriceRangeProps(): PriceRangeProps {
        return {
            minPriceValue: this.state.minimumPriceRange,
            maxPriceValue: this.state.maximumPriceRange,
            minimumFieldOnChangeHandler: this.onChangeMinPriceRange,
            maximumFieldOnChangeHandler: this.onChangeMaxPriceRange
        }
    }

    private getServiceProps(): ServicesProps {
        return {
            onChangeServiceCheckboxHandler: this.onChangeServicesCheckboxHandler
        }
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

                    <div className='filter-item price'>
                        <PriceRange {...this.getPriceRangeProps()} />
                    </div>

                    <div className='filter-item services'>
                        <Services {... this.getServiceProps()} />
                    </div>

                    <div className='filter-item submit'>
                        <div className='submit-button'>
                            <button>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
