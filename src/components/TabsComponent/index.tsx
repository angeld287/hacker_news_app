import React from 'react';
import { ITab, ITabBody } from '../../interfaces/components/ITab';
import TabsButtons from '../ButtonGroup';
import './styles.css';

const TabsComponent: React.FC<ITab> = ({ tabBody, tabButtons }) => {

    return (
        <div className="tab-container">
            <TabsButtons buttons={tabButtons.buttons} />
            <TabBody components={tabBody.components} />
        </div>
    )
}

const TabBody: React.FC<ITabBody> = React.memo(({ components }) => {
    return (
        <div className="tab-body">
            {components.map(child => (
                <div className={child.isActive ? 'active-tab' : 'inactive-tab'}>
                    {child.component}
                </div>
            ))}
        </div>
    )
})

export default React.memo(TabsComponent)