import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchAsync } from "../../features/finder/asyncThunks";
import { selectSearch } from "../../features/finder/searchSlice";
import { ISelectOptions, Options } from "../../interfaces/components/ISelect";
import IHit from "../../interfaces/models/IHit";
import { getIndexFromSelectedPage, getRangeFromArray } from "../../utils/tools";

const useNews = () => {
    const [current8, setCurrent8] = useState<Array<IHit>>([]);
    const [selectedPage, setSelectedPage] = useState(1)

    const dispatch = useAppDispatch();
    const search = useAppSelector(selectSearch);

    const onSearch = useCallback((query: string, page: string) => {
        dispatch(searchAsync({ query, page }))
    }, [dispatch]);

    useEffect(() => {
        if (!search.results.hits) {
            onSearch(Options.ANGULAR, "0")
        }

        if (search.results.hits) {
            const index: number = getIndexFromSelectedPage(selectedPage, 8)
            setCurrent8(getRangeFromArray(search.results.hits, index, index + 7))
        }

    }, [onSearch, search, selectedPage])

    const onChangePagination = useCallback((event: ChangeEvent<unknown>, page: number) => {
        setSelectedPage(page)
    }, [setSelectedPage])

    const options: Array<ISelectOptions> = useMemo(
        () => ([
            { text: "Angular", value: Options.ANGULAR },
            { text: "React", value: Options.REACT },
            { text: "Vuejs", value: Options.VUE },
        ]), []
    )

    return { options, search, onChangePagination, current8 };
}

export default useNews