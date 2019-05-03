import React, { Component } from 'react'
import Checkbox from '../../../common/Checkbox';

class Resorts extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const resorts: Array<string> = this.props.resorts;
        const resortsCheckboxes = resorts.map(resort => {
            return <Checkbox
                name={resort}
                key={resort}
                defaultChecked={this.props.defaultChecked}
                onChangeHandler={this.props.changeHandler}
            />
        })

        return (
            <div>
                {resortsCheckboxes}
            </div>
        )
    }
}

export default Resorts
