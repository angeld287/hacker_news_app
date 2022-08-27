import React from 'react';
import Tabs from '../../components/TabsComponent';
import './styles.css';
import useHackerNews from './useHackerNews';

const HackerNews: React.FC = () => {
    const { tabButtons, tabBody } = useHackerNews();

    return (
        <div className="container">
            <div className="header">
                <span>
                    HACKER NEWS
                </span>
            </div>
            <div className="body">
                <Tabs tabBody={tabBody} tabButtons={tabButtons} />
            </div>
        </div>
    )
}

export default HackerNews