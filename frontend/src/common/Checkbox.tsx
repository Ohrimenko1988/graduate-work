import React, { Component } from 'react'
import { directive } from '@babel/types';

export interface CheckboxProps {
    name: string;
    key: string;
    defaultChecked: boolean;
    onChangeHandler: any;
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps)=>{
        return (
            <div className='checkbox'>
                <div className='title'>{props.name}</div>
                <div className='checkbox-button'>
                    <input
                        type="checkbox"
                        key={props.key}
                        value={props.name}
                        defaultChecked={props.defaultChecked}
                        onChange={props.onChangeHandler}>
                    </input>
                </div>
            </div>
        )
}

export default Checkbox
