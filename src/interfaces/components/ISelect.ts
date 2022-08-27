export interface ISelect {
    placeholder: string;
    options: Array<ISelectOptions>;
}

export interface ISelectOptions {
    text: string;
    value: string;
}

export enum Options {
    ANGULAR = "angular",
    REACT = "reactjs",
    VUE = "vuejs"
}