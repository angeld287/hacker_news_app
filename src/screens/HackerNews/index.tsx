import React from 'react';
import Tabs from '../../components/TabsComponent';
import './styles.css';

const HackerNews: React.FC = () => {

    return (
        <div className="Front-End-Test---Home-view">
            <div className="header">
                <span className="HACKER-NEWS">
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