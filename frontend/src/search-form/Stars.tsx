import React, { Component } from 'react'
import Checkbox, { CheckboxProps } from '../common/Checkbox';
import SelectList, { SelectListProps } from '../common/SelectList';

export interface StarsProps {
    className: string;
    onChangeHandler: any;
}

export default class Stars extends Component<StarsProps, any> {
    private static readonly STARS: string[] = ["2*", "3*", "4*", "5*"];
    constructor(props: StarsProps) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className}>
                <SelectList
                    items={Stars.STARS}
                    label="Категорія готелю"
                    name="categories"
                    selectionHandler={this.props.onChangeHandler}
                />
            </div>
        )
    }
}
