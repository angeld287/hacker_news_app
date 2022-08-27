import React from 'react';
import IHit from '../../interfaces/models/IHit';
import './styles.css';

const NewsComponent: React.FC<IHit> = (hit) => {
    return (
        <div className="Rectangle">
            {hit.story_title}
            {hit.created_at_i}
        </div>
    )
}

export default NewsComponent