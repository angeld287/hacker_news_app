import { ChangeEvent } from "react";

export interface IPagination {
    itemsCount: number;
    onChange: ((event: ChangeEvent<unknown>, page: number) => void) | undefined;
}