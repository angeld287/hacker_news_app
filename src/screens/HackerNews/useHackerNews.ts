import { useMemo, useState } from "react";
import { IButtonGroup } from "../../interfaces/components/IButtonGroup";
import { ITabBody, TabType } from "../../interfaces/components/ITab";

const useHackerNews = () => {
    const [activeTab, setActiveTab] = useState(1)

    const tabButtons: IButtonGroup = useMemo(() => (
        {
            buttons: [
                { text: "All", action: () => setActiveTab(1), isActive: activeTab === TabType.ALL },
                { text: "My faves", action: () => setActiveTab(0), isActive: activeTab === TabType.FAVORITE },
            ]
        }
    ), [activeTab]);

    const tabBody: ITabBody = useMemo(() => ({
        components: [
            {
                component: {
                    type: TabType.ALL
                }, isActive: activeTab === TabType.ALL,
                key: "key-all"
            },
            {
                component: {
                    type: TabType.FAVORITE
                }, isActive: activeTab === TabType.FAVORITE,
                key: "key-fav"
            }
        ]
    }), [activeTab]);

    return { tabButtons, tabBody };
}

export default useHackerNews