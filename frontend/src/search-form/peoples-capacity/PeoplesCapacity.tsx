import React, { Component, CSSProperties } from 'react'
import AdultsCapacity from './AdultsCapacity';
import ChildrenCapacity from './ChildrenCapacity';

class PeoplesCapacity extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    private readonly cssProperties: CSSProperties = {
        margin: "2px",
        padding: "2px",
        borderBottomStyle: "double",
        borderColor: "rebeccapurple"
    }

    render() {
        return (
            <div className={this.props.className}>
                <label style={this.cssProperties}>Оберіть кількість туристів</label>
                <div className='capacity-selectors'>
                    <AdultsCapacity selectionHandler={this.props.adultsCapacityHandler} style={{margin: "2px", padding: "2px"}}/>
                    <ChildrenCapacity selectionHandler={this.props.childrenCapacityHandler} style={{margin: "2px", padding: "2px"}}/>
                </div>
            </div>
        )
    }
}

export default PeoplesCapacity
