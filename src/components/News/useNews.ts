import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectSearch, setApiCurrentPage } from "../../features/finder/searchSlice";
import { ISelectOptions, Options } from "../../interfaces/components/ISelect";
import IHit from "../../interfaces/models/IHit";
import ILocalStoreService from "../../interfaces/services/ILocalStoreService";
import localStoreService from "../../services/localStoreService";
import { getIndexFromSelectedPage, getRangeFromArray } from "../../utils/tools";

const useNews = (hits: Array<IHit> | undefined) => {
    const [current8Items, setCurrent8Items] = useState<Array<IHit>>([]);
    const [selectedPage, setSelectedPage] = useState(1)

    const search = useAppSelector(selectSearch);
    const dispatch = useAppDispatch();

    const localSService: ILocalStoreService = useMemo(() => new localStoreService(), [])

    useEffect(() => {
        if (hits) {
            const startIndex: number = getIndexFromSelectedPage(selectedPage, 8)
            const endIndex: number = startIndex + 7;
            setCurrent8Items(getRangeFromArray(hits, startIndex, endIndex))
        }
    }, [hits, selectedPage])

    const onChangePagination = useCallback((event: ChangeEvent<unknown>, page: number) => {
        const lastButton: number = hits ? Math.ceil(hits.length / 8) : 0
        if (page === lastButton) {
            dispatch(setApiCurrentPage(search.apiCurrentPage + 1))
        }
        setSelectedPage(page)
    }, [dispatch, setSelectedPage, hits, search.apiCurrentPage])

    const options: Array<ISelectOptions> = useMemo(
        () => ([
            { text: "Angular", value: Options.ANGULAR },
            { text: "React", value: Options.REACT },
            { text: "Vuejs", value: Options.VUE },
        ]), []
    )

    const onChangeSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        localSService.updateNewsType(e.target.value as Options)
    }, [localSService])

    return { options, onChangePagination, current8Items, onChangeSelect };
}

export default useNews