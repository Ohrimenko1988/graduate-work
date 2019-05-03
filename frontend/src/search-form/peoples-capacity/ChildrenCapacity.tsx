import React, { Component } from 'react'
import SelectList from '../../common/SelectList';

class ChildrenCapacity extends Component<any, any> {
    private childrenCapacityItems: Array<number>;

    constructor(props: any) {
        super(props)

        this.childrenCapacityItems = this.createChildrenItems(8)
    }

    createChildrenItems(length: number): Array<number> {
        let result: Array<number> = new Array();

        for (let i = 0; i <= length; i++) {
            result.push(i)
        }

        return result;
    }

    render() {
        return (
            <div className='children-capacity'>
                <SelectList
                    label='Select children'
                    name='childrenCapacity'
                    items={this.childrenCapacityItems}
                    selectionHandler={this.props.selectionHandler}
                />
            </div>
        )
    }
}

export default ChildrenCapacity
