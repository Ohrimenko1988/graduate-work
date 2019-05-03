import React, { Component } from 'react'
import AdultsCapacity from './AdultsCapacity';
import ChildrenCapacity from './ChildrenCapacity';

class PeoplesCapacity extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className={this.props.className}>
                <label>Select peoples capacity</label>
                <div className='capacity-selectors'>
                    <AdultsCapacity selectionHandler={this.props.adultsCapacityHandler} />
                    <ChildrenCapacity selectionHandler={this.props.childrenCapacityHandler} />
                </div>
            </div>
        )
    }
}

export default PeoplesCapacity
