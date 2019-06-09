import React, { Component } from 'react'

export interface PriceRangeProps {
    minPriceValue: number;
    maxPriceValue: number;
    minimumFieldOnChangeHandler: any;
    maximumFieldOnChangeHandler: any;
}

const PriceRange: React.FC<PriceRangeProps> = (props: PriceRangeProps) => {
    return (
        <div className='price-range'>
            <div className='title'>Фільтрація за ціною</div>
            <div className='price-arrea'>
                <div className='price-arrea-item'>
                    <div className='title'>Від</div>
                    <div className='input-field'>
                        <input type="text" value={props.minPriceValue} onChange={props.minimumFieldOnChangeHandler} />
                    </div>
                </div>

                <div className='price-arrea-item'>
                    <div className='title'>До</div>
                    <div className='input-field'>
                        <input type="text" value={props.maxPriceValue}  onChange={props.maximumFieldOnChangeHandler}/>
                    </div>
                </div>

            </div>
        </div>
    )    
}

export default PriceRange
