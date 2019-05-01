import React, { Component } from 'react'
import GreeceResorts from './resort/GreeceResorts';
import EgyptResorts from './resort/EgyptResorts';
import ItalyResorts from './resort/ItalyResorts';
import SelectList from '../common/SelectList';

class CountryForm extends Component<any, any> {
    private enabledResorts: Set<string> = new Set()
    private static readonly COUNTRIES: Array<string> = ['none', 'Greece', 'Egypt', 'Italy']

    constructor(props: any) {
        super(props);

        this.state = {
            country: 'none'
        }

        this.toggleResortCheckbox = this.toggleResortCheckbox.bind(this);
        this.selectCountryHandler = this.selectCountryHandler.bind(this);
    }

    toggleResortCheckbox = (event: any) => {
        const resortName: string = event.target.value

        if (this.enabledResorts.has(resortName)) {
            this.enabledResorts.delete(resortName)
            return
        }

        this.enabledResorts.add(resortName)
    }

    selectCountryHandler = (event: any) => {
        this.enabledResorts = new Set()
        this.setState({
            country: event.target.value
        })


    }

    render() {
        let resorts;

        if (this.state.country === 'none') {
            resorts = '';
        }

        if (this.state.country === 'Greece') {
            resorts = <GreeceResorts changeHandler={this.toggleResortCheckbox} />;
        }

        if (this.state.country === 'Egypt') {
            resorts = <EgyptResorts changeHandler={this.toggleResortCheckbox} />;
        }

        if (this.state.country === 'Italy') {
            resorts = <ItalyResorts changeHandler={this.toggleResortCheckbox} />;
        }

        return (
            <div className='countryForm'>
                <div className='countries'>
                    <SelectList
                        label='Select country'
                        name='countries'
                        items={CountryForm.COUNTRIES}
                        selectionHandler={this.selectCountryHandler}
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
