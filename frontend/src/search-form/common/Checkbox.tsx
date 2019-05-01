import React, { Component } from 'react'

class Checkbox extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const name: string = this.props.name;
        return (
            <div className='country'>
                <input
                    type="checkbox"
                    key={this.props.key}
                    defaultChecked={this.props.defaultChecked}
                    onChange={() => this.props.changeHandler(name)}>
                </input>
                <label>{name}</label>
            </div>
        )
    }
}

export default Checkbox
