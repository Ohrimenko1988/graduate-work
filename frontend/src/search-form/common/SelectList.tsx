import React, { Component } from 'react'

class SelectList extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    createListItems(items: Array<string>){
        return items.map(item => {
            return <option key={item} value={item}>{item}</option>
        })
    }

    render() {
        return (
            <div className='selectionList'>
                <label>{this.props.label}</label>
                    <select name={this.props.name} onChange={this.props.selectionHandler}>
                        {this.createListItems(this.props.items)}
                    </select>
            </div>
        )
    }
}

export default SelectList
