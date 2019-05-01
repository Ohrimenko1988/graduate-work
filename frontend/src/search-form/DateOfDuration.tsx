import React, { Component } from 'react'
import Calendar from 'react-calendar'

class DateOfDuration extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className='dateOfDuration'>
                <Calendar
                    value={this.props.value}
                    onChange={this.props.dateHandler}
                />
            </div>
        )
    }
}

export default DateOfDuration
