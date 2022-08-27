import React from 'react';
import { INews } from '../../interfaces/components/INews';
import { ISelectOptions } from '../../interfaces/components/ISelect';
import { TabType } from '../../interfaces/components/ITab';
import SelectComponent from '../SelectComponent';
import './styles.css';

const News: React.FC<INews> = ({ type }) => {

    const _options: Array<ISelectOptions> = [
        { text: "Angular", value: "angular" },
        { text: "React", value: "react" },
        { text: "Vuejs", value: "vuejs" },
    ]

    return (
        <div>
            {type === TabType.ALL && <SelectComponent placeholder='Select your news' options={_options} />}
        </div>
    )
}

export default News