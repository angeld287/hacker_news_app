import React from 'react';
import { INews } from '../../interfaces/components/INews';
import { TabType } from '../../interfaces/components/ITab';
import SelectComponent from '../SelectComponent';
import './styles.css';
import useNews from './useNews';

const News: React.FC<INews> = ({ type }) => {

    const { options } = useNews();

    return (
        <div>
            <div>
                {type === TabType.ALL && <SelectComponent placeholder='Select your news' options={options} />}
            </div>
            <div>

            </div>
        </div>
    )
}

export default React.memo(News);