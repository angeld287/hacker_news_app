import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchAsync } from "../../features/finder/asyncThunks";
import { selectSearch } from "../../features/finder/searchSlice";
import { ISelectOptions, Options } from "../../interfaces/components/ISelect";

const useNews = () => {
    const dispatch = useAppDispatch();
    const search = useAppSelector(selectSearch);

    const onSearch = useCallback((query: string, page: string) => {
        dispatch(searchAsync({ query, page }))
    }, [dispatch]);

    useEffect(() => {
        if (!search.results.hits) {
            onSearch(Options.ANGULAR, "0")
        }
    }, [onSearch, search])

    const options: Array<ISelectOptions> = useMemo(
        () => ([
            { text: "Angular", value: Options.ANGULAR },
            { text: "React", value: Options.REACT },
            { text: "Vuejs", value: Options.VUE },
        ]), []
    )

    return { options, search };
}

export default useNews