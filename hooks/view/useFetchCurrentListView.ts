import { ResponseFetchError } from "@/core/errors";
import PaginatorDTO from "@/core/view/DTO/common/paginator";
import FiltersSectionDTO from "@/core/view/DTO/filter/filters-section";
import ListViewDTO from "@/core/view/DTO/list-view/list-view";
import { useEffect, useState } from "react";
import useFetchCurrentView from "./useFetchCurrentView";

type UseFetchCurrentListView<T extends ListViewDTO<T["list"]>> = {
    isLoading: boolean;
    error?: ResponseFetchError;
    data?: ListViewDTO<T["list"]>;
}

const useFetchCurrentListView = <T extends ListViewDTO<T["list"]>>(id?: string): UseFetchCurrentListView<T> => {
    const { props, isLoading, error } = useFetchCurrentView<T>({ id });
    const [filters, setFilters] = useState<FiltersSectionDTO[] | undefined>(props?.filters);
    const [list, setList] = useState<T["list"] | undefined>(props?.list);
    const [paginator, setPaginator] = useState<PaginatorDTO | undefined>(props?.paginator);

    useEffect(() => {
        if (props?.filters && !filters) {
            setFilters(props.filters);
        }
    }, [props?.filters]);

    useEffect(() => {
        if (props?.list) {
            setList(props.list);
        }
    }, [props?.list]);

    useEffect(() => {
        if (props?.paginator) {
            setPaginator(props.paginator);
        }
    }, [props?.paginator]);

    return {
        isLoading,
        error,
        data: {
            filters,
            list,
            paginator,
        },
    };
};

export default useFetchCurrentListView;