import { IResponse } from "../interfaces/IResponse";
import ISearchByDateService from "../interfaces/services/ISearchByDateService";
import { fetcher } from "../utils/fetch-utils";
import Locals from "../utils/locals";

class searchByDateService implements ISearchByDateService {
    private url: string = Locals.config().searchByDateEndPoint;

    async searchByDate(query: string, page: string): Promise<IResponse> {
        try {
            const fetchResult = await fetcher(`${this.url}query=${query}&page=${page}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'mode': 'no-cors',
                }
            });
            return await fetchResult;
        } catch (error) {
            let errorResult: IResponse = {
                hits: null,
                query: "",
                page: 0
            }
            return errorResult
        }
    }
}
export default searchByDateService;