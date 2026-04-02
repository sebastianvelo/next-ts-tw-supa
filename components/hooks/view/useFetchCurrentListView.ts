import { ResponseFetchError } from "@/core/errors";
import ListViewDTO from "@/presentation/view/dto/templates/list-view";
import { useEffect, useState } from "react";
import useFetchCurrentView from "./useFetchCurrentView";

type UseFetchCurrentListView<T extends ListViewDTO<T["list"]>> = {
    isLoading: boolean;
    error?: ResponseFetchError;
    data?: ListViewDTO<T["list"]>;
}

const useFetchCurrentListView = <T extends ListViewDTO<T["list"]>>(id?: string): UseFetchCurrentListView<T> => {
    const { props, isLoading, error } = useFetchCurrentView<T>({ id });
    const [stable, setStable] = useState<ListViewDTO<T["list"]>>({
        filters: undefined,
        list: undefined,
        paginator: undefined,
    });

    useEffect(() => {
        if (!props) return;
        setStable({
            filters: props.filters ?? stable.filters, // mantiene filters si no vienen nuevos
            list: props.list,
            paginator: props.paginator,
        });
    }, [props]);

    return { isLoading, error, data: stable };
};

export default useFetchCurrentListView;