import { ResponseFetchError } from "@/core/errors";
import useRedirectOnError from "@/hooks/error/useRedirectOnError";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import fetcher from "./common/fetcher";
import { FetchResponse, FetchViewOptions } from "./types";

const useFetchView = <T>(url?: string | null, options?: FetchViewOptions): FetchResponse<T> => {
    const searchParams = useSearchParams();

    const filteredParams = new URLSearchParams();

    if (options?.fetchOnParamsChange && options?.allowedParams && options.allowedParams.length > 0) {
        options.allowedParams.forEach(param => {
            const value = searchParams.get(param);
            if (value !== null) {
                filteredParams.set(param, value);
            }
        });
    }

    const urlWithParams = url && options?.fetchOnParamsChange && filteredParams.size > 0
        ? `${url}?${filteredParams.toString()}`
        : url;

    const { data: props, error, isLoading } = useSWR<T, ResponseFetchError>(urlWithParams, fetcher);

    if (options?.redirectOnError) {
        useRedirectOnError(error, options.fallback);
    }

    return {
        props,
        isLoading,
        error
    };
};

export default useFetchView;