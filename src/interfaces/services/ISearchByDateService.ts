import { IResponse } from "../IResponse";

export default interface ISearchByDateService {
    searchByDate(url: string): Promise<IResponse>
}