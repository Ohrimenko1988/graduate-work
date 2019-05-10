import React, { Component } from 'react'
import Checkbox, { CheckboxProps } from '../common/Checkbox';

export interface AccomodationProps {
    className: string;
    onChangeHandler: any;
}

export default class Accomodation extends Component<AccomodationProps, any> {
    private static readonly ACCOM_TYPES: string[] = ["OB", "BB", "HB", "FB", "AI", "UAI"];
    constructor(props: AccomodationProps) {
        super(props);
    }

    private renderAccomodations() {
        return Accomodation.ACCOM_TYPES.map(accom => {
            const checkboxProps: CheckboxProps = {
                defaultChecked: false,
                key: accom,
                name: accom,
                onChangeHandler: this.props.onChangeHandler
            };

            return <Checkbox {...checkboxProps} />;
        })
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="accom-label">Select Accomodation type</div>
                <div>
                    {this.renderAccomodations()}
                </div>

            </div>
        )
    }
}
