import { MouseEventHandler } from "react";
import IHit from "../models/IHit";

export interface IHitComponent extends IHit {
    addToFaves?: any;
    removeFromFaves?: any;
    isInMyFaves?: boolean;
}