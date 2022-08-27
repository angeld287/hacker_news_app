import { useMemo, useState } from "react";
import { IButtonGroup } from "../../interfaces/components/IButtonGroup";
import { ITabBody } from "../../interfaces/components/ITab";

const useHackerNews = () => {
    const [activeTab, setActiveTab] = useState("all")

    const tabButtons: IButtonGroup = useMemo(() => (
        {
            buttons: [
                { text: "All", action: () => setActiveTab("all"), isActive: activeTab === "all" },
                { text: "My faves", action: () => setActiveTab("favs"), isActive: activeTab === "favs" },
            ]
        }
    ), [activeTab]);

    const tabBody: ITabBody = useMemo(() => ({
        components: [
            { component: "Todos", isActive: activeTab === "all" },
            { component: "Favoritos", isActive: activeTab === "favs" }
        ]
    }), [activeTab]);

    return { tabButtons, tabBody };
}

export default useHackerNews