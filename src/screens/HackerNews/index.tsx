import React from 'react';
import Tabs from '../../components/TabsComponent';
import './styles.css';

const HackerNews: React.FC = () => {

    return (
        <div className="container">
            <div className="header">
                <span>
                    HACKER NEWS
                </span>
            </div>
            <div className="body">
                <Tabs />
            </div>
        </div>
    )
}

export default HackerNews