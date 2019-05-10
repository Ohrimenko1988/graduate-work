import React, { Component } from 'react'

export interface SelectListProps{
    label: string;
    name: string;
    items: string[];
    selectionHandler: any;
}
class SelectList extends Component<SelectListProps, any> {
    constructor(props: SelectListProps) {
        super(props)
    }

    createListItems(items: Array<string>){
        return items.map(item => {
            return <option key={item} value={item}>{item}</option>
        })
    }

    render() {
        return (
            <div className='selection-list'>
                <label>{this.props.label}</label>
                    <select name={this.props.name} onChange={this.props.selectionHandler}>
                        {this.createListItems(this.props.items)}
                    </select>
            </div>
        )
    }
}

export default SelectList
