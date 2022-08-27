import React from 'react';
import { INews } from '../../interfaces/components/INews';
import './styles.css';

const News: React.FC<INews> = ({ type }) => {

    return (
        <div>
            {type}
        </div>
    )
}

export default News