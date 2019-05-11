import React, { Component } from 'react'
import TourkishResorts from './resort/TourkishResorts';
import EgyptResorts from './resort/EgyptResorts';
import SpainResorts from './resort/SpainResorts';
import SelectList from '../../common/SelectList';

class CountryForm extends Component<any, any> {
    private enabledResorts: Set<string> = new Set()
    private static readonly COUNTRIES: Array<string> = ['----', 'Туреччина', 'Єгипет', 'Іспанія']

    constructor(props: any) {
        super(props);
    }

    render() {
        let resorts;
        const selectedCountry: string = this.props.selectedCountry

        if (selectedCountry === '----') {
            resorts = '';
        }

        if (selectedCountry === 'Туреччина') {
            resorts = <TourkishResorts changeHandler={this.props.toggleResortHandler} />;
        }

        if (selectedCountry === 'Єгипет') {
            resorts = <EgyptResorts changeHandler={this.props.toggleResortHandler} />;
        }

        if (selectedCountry === 'Іспанія') {
            resorts = <SpainResorts changeHandler={this.props.toggleResortHandler} />;
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
