type Sorter<T = object> = {
    column: keyof T;
    ascending?: boolean
};

export default Sorter;