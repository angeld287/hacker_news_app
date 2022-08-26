import { IResponse } from "../../interfaces/IResponse";

export interface ISearchProps {
    query: string;
    page: string;
}

export interface ISearchSlice {
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    results: IResponse;
}