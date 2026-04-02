import { ResponseFetchError } from "@/core/errors";
import QueryParam from "@/routes/types/params.routes";

export interface FetchViewOptions {
    redirectOnError?: boolean;
    fallback?: string;
    allowedParams?: QueryParam[];
    fetchOnParamsChange?: boolean;
}

export interface FetchResponse<T> {
    props: T | undefined;
    error?: ResponseFetchError;
    isLoading: boolean;
}