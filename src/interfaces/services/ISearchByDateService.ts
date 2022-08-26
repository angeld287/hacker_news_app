import { IResponse } from "../IResponse";

export default interface ISearchByDateService {
    searchByDate(query: string, page: string): Promise<IResponse>
}