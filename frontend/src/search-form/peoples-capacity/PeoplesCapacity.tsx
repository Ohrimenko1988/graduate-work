import React, { Component } from 'react'
import AdultsCapacity from './AdultsCapacity';
import ChildrenCapacity from './ChildrenCapacity';

class PeoplesCapacity extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className='peoplesCapacity'>
                <label>Select peoples capacity</label>
                <AdultsCapacity selectionHandler={this.props.adultsCapacityHandler} />
                <ChildrenCapacity selectionHandler={this.props.childrenCapacityHandler} />
            </div>
        )
    }
}

export default PeoplesCapacity
