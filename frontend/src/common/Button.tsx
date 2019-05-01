import React, { Component } from 'react'

class Button extends Component<any, any> {
    constructor(props: any) {
        super(props)

    }

    render() {
        const buttonValue: string = this.props.value
        return (
            <button
                value={buttonValue}
                onClick={this.props.onClickHandler}
                className={this.props.className}
            >
                {buttonValue}
            </button>
        )
    }
}

export default Button
