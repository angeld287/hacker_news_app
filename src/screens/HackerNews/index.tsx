import React, { useMemo } from 'react';
import Tabs from '../../components/TabsComponent';
import { IButtonGroup } from '../../interfaces/components/IButtonGroup';
import { ITabBody } from '../../interfaces/components/ITab';
import './styles.css';

const HackerNews: React.FC = () => {

    const _tbody: ITabBody = useMemo(() => ({
        components: [
            { component: "Todos", isActive: true },
            { component: "Favoritos", isActive: false }
        ]
    }), []);

    const _tbutton: IButtonGroup = useMemo(() => (
        {
            buttons: [
                { text: "All", action: () => { }, isActive: true },
                { text: "My faves", action: () => { }, isActive: false },
            ]
        }
    ), []);

    return (
        <div className="container">
            <div className="header">
                <span>
                    HACKER NEWS
                </span>
            </div>
            <div className="body">
                <Tabs tabBody={_tbody} tabButtons={_tbutton} />
            </div>
        </div>
    )
}

export default HackerNews