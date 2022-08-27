import { IButtonGroup } from "./IButtonGroup";

export interface ITab {
    tabBody: ITabBody;
    tabButtons: IButtonGroup;
}
export interface ITabBody {
    components: Array<IChildrenComponent>;
}

export interface IChildrenComponent {
    component: string;
    isActive: boolean;
}