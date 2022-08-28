import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectSearch } from '../../features/finder/searchSlice';
import { ISelect } from '../../interfaces/components/ISelect';
import './styles.css';
import { Favorite } from '@mui/icons-material';
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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}><Favorite />Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>

    )
}

export default React.memo(SelectComponent)