import useRouteConfig from "./routes/useRouteConfig";
import { FetchResponse } from "./types";
import useFetchViewWithId from "./useFetchViewWithId";

export type UseFetchCurrentViewParams = {
    forcedId?: string;
    redirectOnError?: boolean;
    id?: string;
    fetchOnParamsChange?: boolean;
};

const useFetchCurrentView = <T>({ redirectOnError = true, id, fetchOnParamsChange = true, }: UseFetchCurrentViewParams = {}): FetchResponse<T> => {
    const { apiRoute: route, fallbackPath, allowedParams } = useRouteConfig();

    const { props, isLoading, error } = useFetchViewWithId<T>({
        route,
        redirectOnError,
        fallbackPath,
        forcedId: id,
        allowedParams,
        fetchOnParamsChange,
    });

    return {
        props,
        isLoading,
        error,
    };
};

export default useFetchCurrentView;