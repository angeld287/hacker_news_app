import { IResponse } from "../interfaces/IResponse";
import ISearchByDateService from "../interfaces/services/ISearchByDateService";
import { fetcher } from "../utils/fetch-utils";
import Locals from "../utils/locals";

class searchByDateService implements ISearchByDateService {
    private url: string = Locals.config().searchByDateEndPoint;

    async searchByDate(url: string): Promise<IResponse> {
        try {
            const pageSpurceFetch = await fetcher(this.url + '/api/getPageSource', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            return await pageSpurceFetch;
        } catch (error) {
            let errorResult: IResponse = {
                hits: null
            }
            return errorResult
        }
    }
}
export default searchByDateService;