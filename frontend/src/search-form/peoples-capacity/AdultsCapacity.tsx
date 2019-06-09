import React, { Component } from 'react'
import SelectList from '../../common/SelectList';

class AdultsCapacity extends Component<any, any> {
    private adultsCapacityItems: Array<string>;

    constructor(props: any) {
        super(props)

        this.adultsCapacityItems = this.createAdultsItems(8)
    }

    createAdultsItems(length: number): Array<string> {
        let result: Array<string> = new Array();

        for (let i = 1; i <= length; i++) {
            result.push("" + i);
        }

        return result;
    }

    render() {
        return (
            <div className='adults-capacity'>
                <SelectList
                    label='Кількість дорослих'
                    name='adultsCapacity'
                    items={this.adultsCapacityItems}
                    selectionHandler={this.props.selectionHandler}
                />
            </div>
        )
    }
}

export default AdultsCapacity
