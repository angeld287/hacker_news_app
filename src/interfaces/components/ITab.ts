export interface ITabBody {
    components: Array<IChildrenComponent>;
}

export interface IChildrenComponent {
    component: string;
    isActive: boolean;
}