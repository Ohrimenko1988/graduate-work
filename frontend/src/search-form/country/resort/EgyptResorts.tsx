import React, { Component } from 'react'
import Resorts from './Resorts';

class EgyptResorts extends Component <any, any> {
    private static readonly RESORTS: Array<string> = ['Sharm el Sheikh', 'Hurghada'];
    private static readonly DEFAULT_CHECKED: boolean = false;

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Resorts
                resorts={EgyptResorts.RESORTS}
                defaultChecked={EgyptResorts.DEFAULT_CHECKED}
                changeHandler={this.props.changeHandler}
            />
        )
    }
}

export default EgyptResorts
