import React, { Component } from 'react'
import Resorts from './Resorts';

class ItalyResorts extends Component <any, any> {
    private static readonly RESORTS: Array<string> = ['Venice', 'Rome', 'Florence'];
    private static readonly DEFAULT_CHECKED: boolean = false;

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Resorts
                resorts={ItalyResorts.RESORTS}
                defaultChecked={ItalyResorts.DEFAULT_CHECKED}
                changeHandler={this.props.changeHandler}
            />
        )
    }
}

export default ItalyResorts
