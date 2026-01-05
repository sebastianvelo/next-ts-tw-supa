import { ResponseFetchError } from "@/core/errors";
import PaginatorDTO from "@/core/view/DTO/common/paginator";
import FilterBadgeDTO from "@/core/view/DTO/filter/filter-badge";
import { CardListSectionDTO } from "@/core/view/DTO/list-section/card-list-section";
import ListViewDTO from "@/core/view/DTO/list-view/list-view";
import { useEffect, useState } from "react";
import useFetchCurrentView from "./useFetchCurrentView";

type UseFetchCurrentListView = {
    isLoading: boolean;
    error?: ResponseFetchError;
    data?: ListViewDTO;
}

const useFetchCurrentListView = (): UseFetchCurrentListView => {
    const { props, isLoading, error } = useFetchCurrentView<ListViewDTO>();
    const [filters, setFilters] = useState<FilterBadgeDTO[] | undefined>(props?.filters);
    const [list, setList] = useState<CardListSectionDTO | undefined>(props?.list);
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