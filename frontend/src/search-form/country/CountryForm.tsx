import React, { Component } from 'react'
import GreeceResorts from './resort/GreeceResorts';
import EgyptResorts from './resort/EgyptResorts';
import ItalyResorts from './resort/ItalyResorts';
import SelectList from '../../common/SelectList';

class CountryForm extends Component<any, any> {
    private enabledResorts: Set<string> = new Set()
    private static readonly COUNTRIES: Array<string> = ['none', 'Greece', 'Egypt', 'Italy']

    constructor(props: any) {
        super(props);
    }

    render() {
        let resorts;
        const selectedCountry: string = this.props.selectedCountry

        if (selectedCountry === 'none') {
            resorts = '';
        }

        if (selectedCountry === 'Greece') {
            resorts = <GreeceResorts changeHandler={this.props.toggleResortHandler} />;
        }

        if (selectedCountry === 'Egypt') {
            resorts = <EgyptResorts changeHandler={this.props.toggleResortHandler} />;
        }

        if (selectedCountry === 'Italy') {
            resorts = <ItalyResorts changeHandler={this.props.toggleResortHandler} />;
        }

        return (
            <div className={this.props.className}>
                <div className='countries'>
                    <SelectList
                        label='Select country'
                        name='countries'
                        items={CountryForm.COUNTRIES}
                        selectionHandler={this.props.selectCountryHandler}
                    />
                </div>
                <div className='resorts'>
                    {resorts}
                </div>
            </div>
        )
    }
}

export default CountryForm
