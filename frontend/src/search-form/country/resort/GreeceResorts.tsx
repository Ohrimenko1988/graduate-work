import React, { Component } from 'react'
import Resorts from './Resorts';

class GreeceResorts extends Component<any, any> {
    private static readonly GREECE_RESORTS: Array<string> = ['Korfu', 'Krit', 'Rodos'];
    private static readonly DEFAULT_CHECKED: boolean = false;

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Resorts
                resorts={GreeceResorts.GREECE_RESORTS}
                defaultChecked={GreeceResorts.DEFAULT_CHECKED}
                changeHandler={this.props.changeHandler}
            />
        )
    }
}

export default GreeceResorts
