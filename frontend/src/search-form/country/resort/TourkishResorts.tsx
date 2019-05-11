import React, { Component } from 'react'
import Resorts from './Resorts';

class TourkishResorts extends Component<any, any> {
    private static readonly RESORTS: Array<string> = ["Аланія", "Анталія", "Кемер", "Стамбул"]
    private static readonly DEFAULT_CHECKED: boolean = false;

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Resorts
                resorts={TourkishResorts.RESORTS}
                defaultChecked={TourkishResorts.DEFAULT_CHECKED}
                changeHandler={this.props.changeHandler}
            />
        )
    }
}

export default TourkishResorts
