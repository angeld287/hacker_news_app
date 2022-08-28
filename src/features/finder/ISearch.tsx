import { Options } from "../../interfaces/components/ISelect";
import { IResponse } from "../../interfaces/IResponse";

export interface ISearchProps {
    query: string;
    page: string;
}

export interface ISearchSlice {
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    results: IResponse;
    records: Array<ISearchRecord>
    currentSearchProps: ISearchRecord
    apiCurrentPage: Array<ICurrentPage>,
    newsType: Options | null
}

export interface ISearchRecord {
    type: Options.ANGULAR | Options.REACT | Options.VUE;
    page: string;
}

export interface ICurrentPage {
    page: number;
    type: Options | null;
}