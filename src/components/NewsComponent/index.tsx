import React, { useEffect, useState } from 'react';
import { IHitComponent } from '../../interfaces/components/IHits';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import './styles.css';
import { timeSince } from '../../utils/tools';

const NewsComponent: React.FC<IHitComponent> = ({ author, story_title, story_url, created_at, addToFaves, removeFromFaves, isInMyFaves }) => {
    const [time, setTime] = useState("")
    useEffect(() => {
        setTime(timeSince(new Date(created_at)));
    }, [created_at])

    return (
        <div className="news-component">
            <div className="news-column column-body">
                <a href={story_url} target="_blank" rel="noopener noreferrer">
                    <div className="time-row">
                        <div className="time-column clock-icon">
                            <div className="clock-icon">
                                <img alt="" src="https://github.com/angeld287/hacker_news_app/blob/master/src/assets/iconmonstr-time-2.png?raw=true" className="iconmonstr-time-2" />
                            </div>
                        </div>
                        <div className="time-column time-description">{time} ago by {author}</div>
                    </div>
                    <div className="title-row">
                        <b>{story_title}</b>
                    </div>
                </a>
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