import { createAsyncThunk } from "@reduxjs/toolkit";
import SearchByDateService from "../../apis/searchByDateService";
import ISearchByDateService from "../../interfaces/services/ISearchByDateService";
import { ISearchProps } from "./ISearch";

const searchByDateService: ISearchByDateService = new SearchByDateService();

export const searchAsync = createAsyncThunk(
    'finder/search',
    async (args: ISearchProps) => {
        return await searchByDateService.searchByDate(args.query, args.page);
    }
);