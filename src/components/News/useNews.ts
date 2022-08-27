import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch } from "../../app/hooks";
import { searchAsync } from "../../features/finder/asyncThunks";
import { ISelectOptions, Options } from "../../interfaces/components/ISelect";

const useNews = () => {
    const dispatch = useAppDispatch()

    const onSearch = useCallback((query: string, page: string) => {
        dispatch(searchAsync({ query, page }))
    }, [dispatch]);

    useEffect(() => {
        onSearch(Options.ANGULAR, "0")
    }, [onSearch])

    const options: Array<ISelectOptions> = useMemo(
        () => ([
            { text: "Angular", value: Options.ANGULAR },
            { text: "React", value: Options.REACT },
            { text: "Vuejs", value: Options.VUE },
        ]), []
    )

    return { options };
}

export default useNews