import React, { Component } from 'react'
import SelectList from '../common/SelectList';

class DurationOfStay extends Component<any, any> {
    private durationItems: Array<string>;

    constructor(props: any) {
        super(props)

        this.durationItems = this.createDurationItems(25)
    }

    createDurationItems(length: number): Array<string> {
        let result: Array<string> = new Array();

        for (let i = 1; i <= length; i++) {
            result.push("" + i)
        }

        return result;
    }

    render() {
        return (
            <div className={this.props.className}>
                <SelectList
                    label='Duration of stay (nights)'
                    name='durationOfStay'
                    items={this.durationItems}
                    selectionHandler={this.props.stayDurationHandler}
                />
            </div>
        )
    }
}

export default DurationOfStay
