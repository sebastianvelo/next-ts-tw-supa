interface ListSectionDTO<T> {
    title?: string;
    subtitle?: string;
    items?: T[] | undefined;
    grid?: string;
}

export default ListSectionDTO;