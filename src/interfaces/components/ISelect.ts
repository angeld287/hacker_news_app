export interface ISelect {
    placeholder: string;
    options: Array<ISelectOptions>;
}

export interface ISelectOptions {
    text: string;
    value: string;
}