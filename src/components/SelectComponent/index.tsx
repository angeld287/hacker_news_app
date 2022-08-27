import React from 'react';
import { ISelect } from '../../interfaces/components/ISelect';
import './styles.css';

const SelectComponent: React.FC<ISelect> = ({ placeholder, options }) => {

    return (
        <div className="select-body">
            <select className="select" placeholder={placeholder} name="news-categoy" >
                {options.map(option => <option key={`key-${option.value}`} value={option.value}>{option.text}</option>)}
            </select>
        </div>

    )
}

export default SelectComponent