import React from 'react';
import { IHitComponent } from '../../interfaces/components/IHits';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import './styles.css';

const NewsComponent: React.FC<IHitComponent> = ({ author, story_title, story_url, created_at, addToFaves, removeFromFaves, isInMyFaves }) => {

    return (
        <div className="news-component">
            <div className="news-column body">
                <div className="time-row">
                    <div className="clock-icon"></div>
                    <div className="time-description">{created_at} {author}</div>
                </div>
                <div className="title-row">
                    {story_title}
                </div>
            </div>
            <div className="news-column actions">
                {!isInMyFaves &&
                    <button onClick={addToFaves}>
                        <FavoriteBorder sx={{ color: 'red' }} />
                    </button>
                }
                {isInMyFaves &&
                    <button onClick={removeFromFaves}>
                        <Favorite sx={{ color: 'red' }} />
                    </button>
                }
            </div>
        </div>
    )
}

export default React.memo(NewsComponent)