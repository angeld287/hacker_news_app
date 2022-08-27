import React, { useMemo } from 'react';
import { IButton } from '../../interfaces/components/IButtonGroup';
import { IChildrenComponent, ITabBody } from '../../interfaces/components/ITab';
import TabsButtons from '../ButtonGroup';
import './styles.css';

const TabsComponent: React.FC = () => {
    const buttons: Array<IButton> = useMemo(() => [
        { text: "All", action: () => { }, isActive: true },
        { text: "My faves", action: () => { }, isActive: false },
    ], []);

    const bodies: Array<IChildrenComponent> = useMemo(() => [
        { component: "Todos", isActive: true },
        { component: "Favoritos", isActive: false }
    ], []);

    return (
        <div className="tab-container">
            <TabsButtons buttons={buttons} />
            <TabBody components={bodies} />
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