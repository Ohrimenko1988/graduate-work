import React, { Component } from 'react'
import Calendar from 'react-calendar'

class DateOfDeparture extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className={this.props.className}>
                <Calendar
                    value={this.props.value}
                    onChange={this.props.dateHandler}
                />
            </div>
        )
    }
}

export default DateOfDeparture
