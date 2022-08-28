import { Options } from "../../interfaces/components/ISelect";
import { IResponse } from "../../interfaces/IResponse";
import IHit from "../../interfaces/models/IHit";

export interface ISearchProps {
    query: string;
    page: string;
}

export interface ISearchSlice {
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    results: IResponse;
    localHits: Array<IHit>;
    records: Array<ISearchRecord>;
    currentSearchProps: ISearchRecord;
    apiCurrentPage: Array<ICurrentPage>;
    newsType: Options | null;
}

export interface ISearchRecord {
    type: Options.ANGULAR | Options.REACT | Options.VUE;
    page: string;
}

export interface ICurrentPage {
    page: number;
    type: Options | null;
}