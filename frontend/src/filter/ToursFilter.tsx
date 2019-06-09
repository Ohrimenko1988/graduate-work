import React, { Component } from 'react'
import Checkbox, { CheckboxProps } from '../common/Checkbox';
import PriceRange, { PriceRangeProps } from './PriceRange';
import Services, { ServicesProps } from './Sevices';
import { ITour } from '../common/interfaces/ITour';

export default class ToursFilter extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    private createAccommodationCategories() {
        return ["OB", "BB", "HB", "FB", "AI", "UAI"].map(accommodation => {
            let checkboxProps: CheckboxProps = {
                name: accommodation,
                key: accommodation,
                defaultChecked: false,
                onChangeHandler: this.props.onChangeAccommodationHandler
            }

            return <Checkbox {...checkboxProps} />
        })
    }

    private getPriceRangeProps(): PriceRangeProps {
        return {
            minPriceValue: this.props.minimumPriceRange,
            maxPriceValue: this.props.maximumPriceRange,
            minimumFieldOnChangeHandler: this.props.onChangeMinPriceRange,
            maximumFieldOnChangeHandler: this.props.onChangeMaxPriceRange
        }
    }

    render() {
        return (
            <div>
                <form className='tours-filter' onSubmit={this.props.onSubmitHandler}>
                    <div className='filter-item header'>
                        <div className='title'>Фільтри</div>
                        <div className='submit-button'>
                            <button>Підтвердити</button>
                        </div>
                    </div>

                    <div className='filter-item'>
                        <div className='accommodation'>
                            <div className='title'>Тип перебування</div>
                            <div className='checkboxes'> {this.createAccommodationCategories()} </div>
                        </div>
                    </div>

                    <div className='filter-item price'>
                        <PriceRange {...this.getPriceRangeProps()} />
                    </div>

                    <div className='filter-item submit'>
                        <div className='submit-button'>
                            <button>Підтвердити</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
