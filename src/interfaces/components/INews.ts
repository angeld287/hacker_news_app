import IHit from "../models/IHit";
import { TabType } from "./ITab";

export interface INews {
    type: TabType;
    hits?: Array<IHit>
}

