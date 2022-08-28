import IHit from "./models/IHit";

export interface IResponse {
    hits: Array<IHit> | null;
    query: string;
    page: number
}