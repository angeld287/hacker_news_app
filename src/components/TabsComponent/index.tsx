import React from 'react';
import { IButton } from '../../interfaces/components/IButtonGroup';
import TabsButtons from '../ButtonGroup';
import './styles.css';

const TabsComponent: React.FC = () => {
    const buttons: Array<IButton> = [
        { text: "All", action: () => { }, isActive: true },
        { text: "My faves", action: () => { }, isActive: false },
    ]
    return (
        <div className="tab-container">
            <TabsButtons buttons={buttons} />
        </div>
    )
}

export default TabsComponent