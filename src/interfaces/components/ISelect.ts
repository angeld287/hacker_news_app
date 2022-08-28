import { ChangeEventHandler } from "react";

export interface ISelect {
    placeholder: string;
    options: Array<ISelectOptions>;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    defaultValue: string | number | readonly string[] | undefined;
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