interface TabDTO<T = object> {
    id: string;
    label: string;
    content: T;
};

export default TabDTO;
