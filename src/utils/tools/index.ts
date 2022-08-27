export const getRangeFromArray = (array: Array<any>, start: number, end: number): Array<any> => {
    return array.slice(start - 1, end)
}

export const getIndexFromSelectedPage = (selectedPage: number, quantity: number): number => {
    return 1 + quantity * (selectedPage - 1);
}