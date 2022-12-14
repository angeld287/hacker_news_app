import { useEffect, useMemo, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchAsync } from "../../features/finder/asyncThunks";
import { selectSearch, setLocalHits, setNewsType } from "../../features/finder/searchSlice";
import { IButtonGroup } from "../../interfaces/components/IButtonGroup";
import { ITabBody, TabType } from "../../interfaces/components/ITab";
import IHit from "../../interfaces/models/IHit";
import ILocalStoreService from "../../interfaces/services/ILocalStoreService";
import localStoreService from "../../services/localStoreService";

const useHackerNews = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [apiHits, setApiHits] = useState<Array<IHit>>([])
    const dispatch = useAppDispatch();
    const effecRan = useRef(false)

    const search = useAppSelector(selectSearch);
    const localSService: ILocalStoreService = useMemo(() => new localStoreService(), [])

    useEffect(() => {
        if (effecRan.current === false) {
            const newsType = localSService.getNewsType()
            const myFaves = localSService.getMyFavesHits()

            if (newsType) {
                dispatch(searchAsync({ query: newsType, page: '0' }))
                dispatch(setNewsType(newsType))
            }

            if (myFaves) {
                dispatch(setLocalHits(myFaves))
            }
        }
        return () => {
            effecRan.current = true
        }
    }, [dispatch, localSService])

    useEffect(() => {
        const currentPage = search.apiCurrentPage.find(page => page.type === search.newsType)
        if (currentPage && currentPage.page !== 0 && search.newsType)
            dispatch(searchAsync({ query: search.newsType as string, page: currentPage.page.toString() }))
    }, [search.apiCurrentPage, dispatch, search.newsType])

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
                    hits: apiHits.filter(hit => hit.query === search.newsType)
                }, isActive: activeTab === TabType.ALL,
                key: "key-all"
            },
            {
                component: {
                    type: TabType.FAVORITE,
                    hits: search.localHits
                }, isActive: activeTab === TabType.FAVORITE,
                key: "key-fav"
            }
        ]
    }), [activeTab, apiHits, search.localHits, search.newsType]);

    return { tabButtons, tabBody };
}

export default useHackerNews