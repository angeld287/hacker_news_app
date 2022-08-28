import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectSearch } from '../../features/finder/searchSlice';
import { ISelect } from '../../interfaces/components/ISelect';
import './styles.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const SelectComponent: React.FC<ISelect> = ({ placeholder, options, onChange }) => {
    const search = useAppSelector(selectSearch);
    const [value, setValue] = React.useState('');


    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };

    if (!search.newsType)
        return <h1>Cargando...</h1>;

    return (
        <div className="select-body">
            <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
                <InputLabel id="demo-select-small">Age</InputLabel>

                <Select
                    placeholder="Select your news"
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {
                        options.map(option => (
                            <MenuItem value={option.value}><img className="option-asset" alt="" src={option.image} />{option.text}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>

    )
}

export default React.memo(SelectComponent)