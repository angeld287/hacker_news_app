import { useEffect, useMemo, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchAsync } from "../../features/finder/asyncThunks";
import { selectSearch, setNewsType } from "../../features/finder/searchSlice";
import { IButtonGroup } from "../../interfaces/components/IButtonGroup";
import { Options } from "../../interfaces/components/ISelect";
import { ITabBody, TabType } from "../../interfaces/components/ITab";
import IHit from "../../interfaces/models/IHit";
import ILocalStoreService from "../../interfaces/services/ILocalStoreService";
import localStoreService from "../../services/localStoreService";

const useHackerNews = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [apiHits, setApiHits] = useState<Array<IHit>>([])
    const [localHits, setLocalHits] = useState<Array<IHit>>([])
    const dispatch = useAppDispatch();
    const effecRan = useRef(false)

    const search = useAppSelector(selectSearch);
    const localSService: ILocalStoreService = useMemo(() => new localStoreService(), [])

    useEffect(() => {
        if (effecRan.current === false) {
            dispatch(searchAsync({ query: Options.ANGULAR, page: '0' }))
            const newsType = localSService.getNewsType()
            if (newsType)
                dispatch(setNewsType(newsType))
        }
        return () => {
            effecRan.current = true
        }
    }, [dispatch, localSService])

    useEffect(() => {
        if (search.apiCurrentPage !== 0)
            dispatch(searchAsync({ query: Options.ANGULAR, page: search.apiCurrentPage.toString() }))
    }, [search.apiCurrentPage, dispatch])

    useEffect(() => {
        if (search.results.hits) {
            setApiHits(search.results.hits)
        }
    }, [search.results.hits]);

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
                    type: TabType.ALL,
                    hits: apiHits
                }, isActive: activeTab === TabType.ALL,
                key: "key-all"
            },
            {
                component: {
                    type: TabType.FAVORITE,
                    hits: localHits
                }, isActive: activeTab === TabType.FAVORITE,
                key: "key-fav"
            }
        ]
    }), [activeTab, apiHits, localHits]);

    return { tabButtons, tabBody };
}

export default useHackerNews