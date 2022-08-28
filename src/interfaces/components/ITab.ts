import IHit from "../models/IHit";
import { IButtonGroup } from "./IButtonGroup";
import { INews } from "./INews";

export interface ITab {
    tabBody: ITabBody;
    tabButtons: IButtonGroup;
}
export interface ITabBody {
    components: Array<IChildrenComponent>;
    hits?: IHit
}

export interface IChildrenComponent {
    component: INews;
    isActive: boolean;
    key: string;
}

export enum TabType {
    FAVORITE = 0,
    ALL = 1
}