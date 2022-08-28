import React from 'react';
import { IHitComponent } from '../../interfaces/components/IHits';
import './styles.css';

const NewsComponent: React.FC<IHitComponent> = ({ author, story_title, story_url, created_at, addToFaves, removeFromFaves, isInMyFaves }) => {

    return (
        <div className="news-component">
            <a target="_blank" rel="noreferrer" href={story_url}>{story_title}</a>
            {created_at}
            {author}
            {!isInMyFaves && <button onClick={addToFaves}>Add to Fav</button>}
            {isInMyFaves && <button onClick={removeFromFaves}>Remove from Fav</button>}
        </div>
    )
}

export default React.memo(NewsComponent)