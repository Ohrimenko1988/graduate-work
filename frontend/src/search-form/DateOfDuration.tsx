import React, { Component } from 'react'
import Calendar from 'react-calendar'

class DateOfDuration extends Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            date: new Date
        }

        this.dateHandler = this.dateHandler.bind(this)
    }

    dateHandler(date: any) {
        console.log("==>>>", date)
        this.setState({
            date
        })
    }

    render() {
        return (
            <div className='dateOfDuration'>
                <Calendar
                    value={this.state.date}
                    onChange={this.dateHandler}
                />
            </div>
        )
    }
}

export default DateOfDuration
