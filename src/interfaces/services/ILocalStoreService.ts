import { Options } from '../components/ISelect'
import IHit from '../models/IHit'
export default interface ILocalStoreService {

    getMyFavesHits(): Array<IHit>

    addFave(hit: IHit): boolean

    removeFave(hit: IHit): boolean

    getNewsType(): Options | null

    updateNewsType(type: Options): boolean
}