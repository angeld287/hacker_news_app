import { Options } from "../interfaces/components/ISelect";
import IHit from "../interfaces/models/IHit";
import ILocalStoreService from "../interfaces/services/ILocalStoreService";
import Locals from "../utils/locals";

class localStoreService implements ILocalStoreService {

    private myFavsKey: string = Locals.config().localStoreHitsKey;
    private newsTypeKey: string = Locals.config().localStoreTypeKey;

    getMyFavesHits(): Array<IHit> {
        let results: Array<IHit> = [];
        try {
            const stringHits = localStorage.getItem(this.myFavsKey)
            if (stringHits)
                results = <Array<IHit>>JSON.parse(stringHits)

        } catch (error) {
            console.log(error);
        }
        return results
    }

    addFave(hit: IHit): boolean {
        try {
            let results: Array<IHit> = this.getMyFavesHits();
            if (!results.find(_hit => _hit.objectID === hit.objectID)) {
                results.push(hit)
                localStorage.setItem(this.myFavsKey, JSON.stringify(results));
            }
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    removeFave(hit: IHit): boolean {
        try {
            let results: Array<IHit> = this.getMyFavesHits();
            const hitIndex = results.findIndex(_hit => _hit.objectID === hit.objectID)
            if (hitIndex !== -1) {
                results = results.slice(hitIndex, 1)
                localStorage.setItem(this.myFavsKey, JSON.stringify(results));
            }
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    getNewsType(): Options | null {
        let results: Options | null = null;
        try {
            const stringOption = localStorage.getItem(this.newsTypeKey)
            if (stringOption)
                results = <Options>JSON.parse(stringOption)

        } catch (error) {
            console.log(error);
        }
        return results
    }

    updateNewsType(type: Options): boolean {
        try {
            localStorage.setItem(this.newsTypeKey, JSON.stringify(type));
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
}
export default localStoreService;