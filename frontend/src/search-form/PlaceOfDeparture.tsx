import React, { Component } from 'react'
import SelectList from '../common/SelectList';

class PlaceOfDeparture extends Component<any, any> {
    private static readonly DEPARTURE_PLACES: Array<string> = ['none', 'Kiev', 'Lviv', 'Dnipro']
    constructor(props: any) {
        super(props)

        this.state = {
            placeOfDeparture: ''
        }

        this.selectDeparturePlaceHandler = this.selectDeparturePlaceHandler.bind(this)
    }

    selectDeparturePlaceHandler(event: any) {
        this.setState({
            placeOfDeparture: event.target.value
        })
    }

    render() {
        return (
            <div className='placeOfDeparture'>
                <SelectList
                    label='Select place of departure'
                    name='placeOfDeparture'
                    items={PlaceOfDeparture.DEPARTURE_PLACES}
                    selectionHandler={this.selectDeparturePlaceHandler}
                />
            </div>
        )
    }
}

export default PlaceOfDeparture