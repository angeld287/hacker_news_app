import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchAsync } from "../../features/finder/asyncThunks";
import { addLocalHit, removeLocalHit, selectSearch, setApiCurrentPage, setNewsType } from "../../features/finder/searchSlice";
import { ISelectOptions, Options } from "../../interfaces/components/ISelect";
import { TabType } from "../../interfaces/components/ITab";
import IHit from "../../interfaces/models/IHit";
import ILocalStoreService from "../../interfaces/services/ILocalStoreService";
import localStoreService from "../../services/localStoreService";
import { getIndexFromSelectedPage, getRangeFromArray } from "../../utils/tools";
import { SelectChangeEvent } from '@mui/material/Select';

const useNews = (hits: Array<IHit> | undefined, type: TabType) => {
    const [current8Items, setCurrent8Items] = useState<Array<IHit>>([]);
    const [selectedPage, setSelectedPage] = useState(1)

    const search = useAppSelector(selectSearch);
    const dispatch = useAppDispatch();

    const localSService: ILocalStoreService = useMemo(() => new localStoreService(), [])

    useEffect(() => {
        if (hits) {
            const startIndex: number = getIndexFromSelectedPage(selectedPage, 8)
            const endIndex: number = startIndex + 7;
            if (type === TabType.FAVORITE) {
                let _hits = hits.map(hit => {
                    //hit.isInMyFaves = true
                    return hit
                })
                setCurrent8Items(getRangeFromArray(_hits, startIndex, endIndex))
            } else {
                setCurrent8Items(getRangeFromArray(hits, startIndex, endIndex))
            }

        }
    }, [hits, selectedPage, type])

    const onChangePagination = useCallback((event: ChangeEvent<unknown>, page: number) => {
        if (type === TabType.ALL) {
            const lastButton: number = hits ? Math.ceil(hits.length / 8) : 0
            if (page === lastButton) {
                const currentPage = search.apiCurrentPage.find(page => page.type === search.newsType)
                if (currentPage) {
                    dispatch(setApiCurrentPage({ page: currentPage.page + 1, type: currentPage.type }))
                } else {
                    dispatch(setApiCurrentPage({ page: 1, type: search.newsType }))
                }
            }
            setSelectedPage(page)
        }
    }, [dispatch, setSelectedPage, hits, search.apiCurrentPage, search.newsType, type])

    const options: Array<ISelectOptions> = useMemo(
        () => ([
            { text: "Angular", value: Options.ANGULAR, image: "https://github.com/angeld287/hacker_news_app/blob/master/src/assets/image-138/image-138.png?raw=true" },
            { text: "React", value: Options.REACT, image: "https://github.com/angeld287/hacker_news_app/blob/master/src/assets/image-140/image-140.png?raw=true" },
            { text: "Vuejs", value: Options.VUE, image: "https://github.com/angeld287/hacker_news_app/blob/master/src/assets/image-141/image-141.png?raw=true" },
        ]), []
    )

    const onChangeSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        if (type === TabType.ALL) {
            const value = e.target.value;
            localSService.updateNewsType(value as Options)
            dispatch(setNewsType(value as Options))
            const currentPage = search.apiCurrentPage.find(page => page.type === search.newsType)
            const hitsByPageAndQuery = search.results.hits?.filter(hit => hit.query === value && parseInt(hit.page ? hit.page : "0") === currentPage?.page);
            if (currentPage && hitsByPageAndQuery && hitsByPageAndQuery.length === 0) {
                dispatch(searchAsync({ query: value, page: currentPage.page.toString() }))
            }
        }
    }, [localSService, search, dispatch, type])

    const addNewsToFaves = useCallback((objectId: string) => {
        if (search.results.hits) {
            const hit = search.results.hits.find((hit => hit.objectID === objectId))
            if (hit)
                if (localSService.addFave(hit))
                    dispatch(addLocalHit(hit))
        }
    }, [search.results.hits, localSService, dispatch])

    const removeNewsFromFaves = useCallback((objectId: string) => {
        if (search.results.hits) {
            const hit = search.results.hits.find((hit => hit.objectID === objectId))
            if (hit)
                if (localSService.removeFave(hit))
                    dispatch(removeLocalHit(hit))
        }
    }, [search.results.hits, localSService, dispatch])

    return { options, onChangePagination, current8Items, onChangeSelect, addNewsToFaves, removeNewsFromFaves };
}

export default useNews