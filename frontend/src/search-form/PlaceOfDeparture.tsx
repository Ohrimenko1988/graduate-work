import React, { Component } from 'react'
import SelectList from '../common/SelectList';

class PlaceOfDeparture extends Component<any, any> {
    private static readonly DEPARTURE_PLACES: Array<string> = ['----', 'Київ', 'Львів', 'Дніпро']
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className={this.props.className}>
                <SelectList
                    label='Місто відправлення'
                    name='placeOfDeparture'
                    items={PlaceOfDeparture.DEPARTURE_PLACES}
                    selectionHandler={this.props.departurePlaceHandler}
                />
            </div>
        )
    }
}

export default PlaceOfDeparture
