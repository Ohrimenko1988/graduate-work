import React, { Component, CSSProperties } from 'react'
import Checkbox, { CheckboxProps } from '../common/Checkbox';

export interface AccomodationProps {
    className: string;
    onChangeHandler: any;
}

export default class Accomodation extends Component<AccomodationProps, any> {
    private static readonly ACCOM_TYPES: string[] = ["UAI", "AI", "FB", "BB", "RO"];
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

    private readonly cssProperties: CSSProperties = {
        margin: "2px",
        padding: "2px",
        borderBottomStyle: "double",
        borderColor: "rebeccapurple"
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="accom-label" style={this.cssProperties}>Тип проживання</div>
                <div>
                    {this.renderAccomodations()}
                </div>

            </div>
        )
    }
}
