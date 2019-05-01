import React, { Component } from 'react'
import GreeceResorts from './resort/GreeceResorts';
import EgyptResorts from './resort/EgyptResorts';
import ItalyResorts from './resort/ItalyResorts';

class CountryForm extends Component<any, any> {
    private enabledResorts: Set<string> = new Set()

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
                    <label>Select Country</label>
                    <select name="countries" onChange={this.selectCountryHandler}>
                        <option className='country' value="none">none</option>
                        <option className='country' value="Greece">Greece</option>
                        <option className='country' value="Egypt">Egypt</option>
                        <option className='country' value="Italy">Italy</option>
                    </select>
                </div>
                <div>
                    {resorts}
                </div>


            </div>
        )
    }
}

export default CountryForm
