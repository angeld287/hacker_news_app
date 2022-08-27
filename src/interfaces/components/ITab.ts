import { IButtonGroup } from "./IButtonGroup";
import { INews } from "./INews";

export interface ITab {
    tabBody: ITabBody;
    tabButtons: IButtonGroup;
}
export interface ITabBody {
    components: Array<IChildrenComponent>;
}

export interface IChildrenComponent {
    component: INews;
    isActive: boolean;
}

export enum TabType {
    FAVORITE = 0,
    ALL = 1
}