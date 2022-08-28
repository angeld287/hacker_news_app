import { Options } from "../interfaces/components/ISelect";
import IHit from "../interfaces/models/IHit";
import ILocalStoreService from "../interfaces/services/ILocalStoreService";
import Locals from "../utils/locals";

class localStoreService implements ILocalStoreService {

    private myFavsKey: string = Locals.config().localStoreHitsKey;
    private newsTypeKey: string = Locals.config().localStoreTypeKey;

    getMyFavesHits(): Array<IHit> {
        console.log(this.myFavsKey);

        return []
    }

    addFave(hit: IHit): boolean {
        return true
    }

    removeFave(hit: IHit): boolean {
        return true
    }

    updateNewsType(type: Options): boolean {
        console.log(this.newsTypeKey);
        return true
    }
}
export default localStoreService;