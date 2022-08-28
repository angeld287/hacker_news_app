import { useEffect, useMemo, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchAsync } from "../../features/finder/asyncThunks";
import { selectSearch } from "../../features/finder/searchSlice";
import { IButtonGroup } from "../../interfaces/components/IButtonGroup";
import { Options } from "../../interfaces/components/ISelect";
import { ITabBody, TabType } from "../../interfaces/components/ITab";
import IHit from "../../interfaces/models/IHit";

const useHackerNews = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [apiHits, setApiHits] = useState<Array<IHit>>([])
    const [localHits, setLocalHits] = useState<Array<IHit>>([])
    const dispatch = useAppDispatch();
    const effecRan = useRef(false)

    const search = useAppSelector(selectSearch);


    //const onSearch = useCallback((query: Options, page: string) => {
    //    //console.log('time');
    //    const q = (search.records.find(searchRecord => searchRecord.page === page && searchRecord.type === query))
    //    //console.log(q, search.status, search.records);
    //
    //    if (!q && search.status !== 'pending') {
    //        dispatch(setCurrentSearchProps({ type: query, page }))
    //        dispatch(searchAsync({ query, page }))
    //    }
    //}, [dispatch, search]);

    useEffect(() => {
        if (effecRan.current === false) {
            dispatch(searchAsync({ query: Options.ANGULAR, page: '0' }))
        }
        return () => {
            effecRan.current = true
        }
    }, [dispatch])

    useEffect(() => {
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