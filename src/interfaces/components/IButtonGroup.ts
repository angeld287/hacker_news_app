import { MouseEventHandler } from "react";

export interface IButtonGroup {
    buttons: Array<IButton>
}

export interface IButton {
    text: string;
    action: MouseEventHandler<HTMLButtonElement>;
    isActive: boolean;
}