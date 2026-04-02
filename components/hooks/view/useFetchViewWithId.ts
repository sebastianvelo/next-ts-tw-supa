import { FetchResponse } from "@/hooks/view/types";
import useFetchView from "@/hooks/view/useFetchView";
import QueryParam from "@/routes/types/params.routes";
import { useParams } from "next/navigation";

type UseFetchViewWithIdParams = {
    route: (id: string) => string;
    redirectOnError?: boolean;
    fallbackPath?: (id: string) => string;
    forcedId?: string;
    allowedParams?: QueryParam[];
    fetchOnParamsChange?: boolean;
};

const useFetchViewWithId = <T>({ route, redirectOnError, fallbackPath, forcedId, allowedParams, fetchOnParamsChange }: UseFetchViewWithIdParams): FetchResponse<T> => {
    const { id: paramsId } = useParams<{ id: string }>();
    const id = forcedId || paramsId;

    const noIdButExpected = !id && route.length > 0;
    const url = noIdButExpected ? null : route(id);

    const { props, isLoading, error } = useFetchView<T>(url, {
        redirectOnError,
        fallback: fallbackPath?.(id),
        allowedParams,
        fetchOnParamsChange,
    });

    return { props, isLoading: isLoading || noIdButExpected, error };
};

export default useFetchViewWithId;