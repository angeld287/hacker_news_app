// @ts-nocheck
/**
 * Define App Locals & Configs
 *
 * @author Angel Angeles <aangeles@litystyles.com>
 */

class Locals {

    public static config(): any {
        const searchByDateEndPoint = "https://hn.algolia.com/api/v1/search_by_date?";

        const localStoreHitsKey = "MY-FAVES-KEY"
        const localStoreTypeKey = "NEWS-TYPE"

        return {
            searchByDateEndPoint,
            localStoreHitsKey,
            localStoreTypeKey
        }
    }
}

export default Locals;