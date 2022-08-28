export interface ISelect {
    placeholder: string;
    options: Array<ISelectOptions>;
    onChange: (value: string) => void;
    defaultValue?: string | number | readonly string[] | undefined;
}

export interface ISelectOptions {
    text: string;
    value: string;
    image: string;
}

export enum Options {
    ANGULAR = "angular",
    REACT = "reactjs",
    VUE = "vuejs"
}