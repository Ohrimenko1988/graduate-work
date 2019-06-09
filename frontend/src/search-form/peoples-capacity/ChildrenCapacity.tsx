import React, { Component } from 'react'
import SelectList from '../../common/SelectList';

class ChildrenCapacity extends Component<any, any> {
    private childrenCapacityItems: Array<string>;

    constructor(props: any) {
        super(props)

        this.childrenCapacityItems = this.createChildrenItems(8)
    }

    createChildrenItems(length: number): Array<string> {
        let result: Array<string> = new Array();

        for (let i = 0; i <= length; i++) {
            result.push("" + i)
        }

        return result;
    }

    render() {
        return (
            <div className='children-capacity'>
                <SelectList
                    label='Кількість дітей'
                    name='childrenCapacity'
                    items={this.childrenCapacityItems}
                    selectionHandler={this.props.selectionHandler}
                />
            </div>
        )
    }
}

export default ChildrenCapacity
