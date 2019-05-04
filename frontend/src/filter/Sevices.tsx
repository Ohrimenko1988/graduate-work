import React, { Component } from 'react'
import Checkbox, { CheckboxProps } from '../common/Checkbox';

export interface ServicesProps {
    onChangeServiceCheckboxHandler: any;
}
const Services: React.FC<ServicesProps> = (props: ServicesProps) => {
    function getCheckboxProps(name: string, key: string): CheckboxProps {
        return {
            name: name,
            key: key,
            defaultChecked: false,
            onChangeHandler: props.onChangeServiceCheckboxHandler
        }

    }

    return (
        <div className='services-arrea'>
            <div className='services-arrea-item'>
                <div className='option title'>In the Hotel</div>
                <div className='option '><Checkbox {...getCheckboxProps('Open Pool', 'open-pool')} /></div>
                <div className='option '><Checkbox {...getCheckboxProps('Free Wi-Fi', 'free-wi-fi')} /></div>
            </div>
            <div className='services-arrea-item'>
                <div className='option title'>For Children</div>
                <div className='option '><Checkbox {...getCheckboxProps('Children Club', 'children-club')} /></div>
                <div className='option '><Checkbox {...getCheckboxProps('Children Menu', 'children-menu')} /></div>
            </div>
            <div className='services-arrea-item'>
                <div className='option title'>Sport</div>
                <div className='option '><Checkbox {...getCheckboxProps('Spa', 'spa')} /></div>
                <div className='option '><Checkbox {...getCheckboxProps('Aquapark', 'aquapark')} /></div>
            </div>
            <div className='services-arrea-item'>
                <div className='option title'>Beach</div>
                <div className='option '><Checkbox {...getCheckboxProps('1-st beach line', 'first-beach-line')} /></div>
                <div className='option '><Checkbox {...getCheckboxProps('2-nd beach line', 'second-beach-line')} /></div>
                <div className='option '><Checkbox {...getCheckboxProps('sandy beach', 'sandy-beach')} /></div>
                <div className='option '><Checkbox {...getCheckboxProps('pebble beach', 'pebble-beach')} /></div>
            </div>

        </div>
    )
}




export default Services