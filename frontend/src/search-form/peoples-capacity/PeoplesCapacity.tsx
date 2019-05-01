import React, { Component } from 'react'
import AdultsCapacity from './AdultsCapacity';
import ChildrenCapacity from './ChildrenCapacity';

class PeoplesCapacity extends Component<any,any> {
    constructor (props:any) {
        super(props)

        this.state = {
            adultsCapacity: 1,
            childrenCapacity: 0
        }

        this.adultsCapacityHandler = this.adultsCapacityHandler.bind(this);
        this.childrenCapacityHandler = this.childrenCapacityHandler.bind(this);
    }
    
    adultsCapacityHandler(event:any){
        this.setState({
            adultsCapacity: event.target.value
        })
    }

    childrenCapacityHandler(event: any){
        this.setState({
            childrenCapacity: event.target.value
        })
    }

    render () {
        return (
            <div className='peoplesCapacity'>
                <label>Select peoples capacity</label>
                <AdultsCapacity selectionHandler={this.adultsCapacityHandler} />
                <ChildrenCapacity selectionHandler={this.childrenCapacityHandler} />
            </div>
        )
    }
}

export default PeoplesCapacity