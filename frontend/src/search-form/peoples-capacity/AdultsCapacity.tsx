import React, { Component } from 'react'
import SelectList from '../../common/SelectList';

class AdultsCapacity extends Component<any, any> {
    private adultsCapacityItems: Array<number>;

    constructor(props: any) {
        super(props)

        this.adultsCapacityItems = this.createAdultsItems(8)
    }

    createAdultsItems(length: number): Array<number> {
        let result: Array<number> = new Array();

        for (let i = 1; i <= length; i++) {
            result.push(i)
        }

        return result;
    }

    render() {
        return (
            <div className='adultsCapacity'>
                <SelectList
                    label='Select adults'
                    name='adultsCapacity'
                    items={this.adultsCapacityItems}
                    selectionHandler={this.props.selectionHandler}
                />
            </div>
        )
    }
}

export default AdultsCapacity
