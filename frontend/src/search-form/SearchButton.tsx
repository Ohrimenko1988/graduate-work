import React, { Component } from 'react'
import Button from '../common/Button';

class SearchButton extends Component<any, any> {
    constructor(props: any) {
        super(props)

        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler(event: any) {
    }

    render() {
        return (
            <div>
                <Button
                    value='Search'
                    onClick={this.onClickHandler}
                    className='searchButton'
                />

            </div>
        )
    }
}

export default SearchButton