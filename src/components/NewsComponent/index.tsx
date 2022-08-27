import React from 'react';
import IHit from '../../interfaces/models/IHit';
import './styles.css';

const NewsComponent: React.FC<IHit> = (hit) => {
    //author, story_title, story_url, created_at
    return (
        <div className="Rectangle">
            <a target="_blank" rel="noreferrer" href={hit.story_url}>{hit.story_title}</a>
            {hit.created_at}
            {hit.author}
        </div>
    )
}

export default NewsComponent