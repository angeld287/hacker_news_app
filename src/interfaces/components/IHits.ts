import { MouseEventHandler } from "react";
import IHit from "../models/IHit";
import { TabType } from "./ITab";

export interface IHitComponent extends IHit {
    addToFaves?: any;
    removeFromFaves?: any;
    isInMyFaves?: boolean;
    type: TabType;
}