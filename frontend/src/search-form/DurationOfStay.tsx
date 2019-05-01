import React, { Component } from 'react'
import SelectList from '../common/SelectList';

class DurationOfStay extends Component<any, any> {
    private durationItems: Array<number>;

    constructor(props: any) {
        super(props)

        this.state = {
            durationOfStay: 1
        }

        this.durationItems = this.createDurationItems(25)

        this.durationOfStayHandler = this.durationOfStayHandler.bind(this)
    }

    createDurationItems(length: number): Array<number> {
        let result: Array<number> = new Array();

        for (let i = 1; i <= length; i++) {
            result.push(i)
        }

        return result;
    }

    durationOfStayHandler(event: any) {
        this.setState({
            durationOfStay: event.target.value
        })

    }

    render() {
        return (
            <div className='durationOfStay'>
                <SelectList
                    label='Duration of stay (nights)'
                    name='durationOfStay'
                    items={this.durationItems}
                    selectionHandler={this.durationOfStayHandler}
                />
            </div>
        )
    }
}

export default DurationOfStay
