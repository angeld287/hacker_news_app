import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectSearch } from '../../features/finder/searchSlice';
import { ISelect } from '../../interfaces/components/ISelect';
import './styles.css';

const SelectComponent: React.FC<ISelect> = ({ placeholder, options, onChange }) => {
    const search = useAppSelector(selectSearch);

    if (!search.newsType)
        return <h1>Cargando...</h1>;

    return (
        <div className="select-body">
            <select className="select" defaultValue={search.newsType} onChange={onChange} placeholder={placeholder} name="news-categoy" >
                {options.map(option => <option key={`key-${option.value}`} value={option.value}>{option.text}</option>)}
            </select>
        </div>

    )
}

export default React.memo(SelectComponent)