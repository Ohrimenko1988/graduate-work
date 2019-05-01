import React, { Component } from 'react'
import Checkbox from '../common/Checkbox';
import { string } from 'prop-types';
import { directive } from '@babel/types';
import Resorts from './resort/Resorts';
import GreeceResorts from './resort/GreeceResorts';

class CountryForm extends Component<any, any> {
    private enabledCountry: Set<string> = new Set()
    private enabledResorts: Set<string> = new Set()

    private greeceResorts: Array<string> = ['Korfu', 'Krit', 'Rodos']

    constructor(props: any) {
        super(props);

        this.state = {
            resorts: []
        }

        this.toggleCountryCheckbox = this.toggleCountryCheckbox.bind(this);
        this.toggleResortCheckbox = this.toggleResortCheckbox.bind(this);
        this.selectionHandler = this.selectionHandler.bind(this);
    }

    toggleCountryCheckbox = (name: string) => {
        if (this.enabledCountry.has(name)) {
            this.enabledCountry.delete(name)

            console.log("====>>>>", this.enabledCountry)
        } else {
            this.enabledCountry.add(name)
            console.log("====>>>>", this.enabledCountry)
        }

    }

    toggleResortCheckbox = (name: string) => {
        if (this.enabledResorts.has(name)) {
            this.enabledResorts.delete(name)

            console.log("====>>>>", this.enabledResorts)
        } else {
            this.enabledResorts.add(name)
            console.log("====>>>>", this.enabledResorts)
        }

    }

    selectionHandler = (event: any) => {
        console.log("==>>>", event.target.value)

        if (event.target.value === 'Greece') {
            this.setState({
                resorts: this.greeceResorts
            })
        }


    }

    resortsHandler(event: any){
        console.log("==>>>", event.target.name)
    }


    render() {

        return (
            <div className='countryForm'>

                <div className='countries'>
                    <label>Select Country</label>
                    <select name="countries" onChange={this.selectionHandler}>
                        <option className='country' value="none">none</option>
                        <option className='country' value="Greece">Greece</option>
                        <option className='country' value="Egypt">Egypt</option>
                        <option className='country' value="Italy">Italy</option>
                    </select>
                </div>

                <GreeceResorts changeHandler={this.resortsHandler}/>


                {/* <div className='resorts'>
                    {resortsList}
                </div> */}

            </div>
        )
    }
}

export default CountryForm
