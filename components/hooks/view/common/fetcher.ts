import { ResponseAPIError, ResponseFetchError } from "@/core/errors";

/**
 * Fetcher configurado para useSWR
 * Convierte errores HTTP en ResponseFetchError
 */
const fetcher = async <T>(url: string, options?: RequestInit): Promise<T> => {
    const res = await fetch(url, options);

    if (!res.ok) {
        let errorData: ResponseAPIError | null = null;

        try {
            errorData = await res.json();
        } catch (parseError) {
            console.warn("Failed to parse error response as JSON:", parseError);
        }

        throw new ResponseFetchError(
            res.status,
            errorData?.message || res.statusText || `Request failed with status ${res.status}`,
            errorData?.code,
            errorData?.details
        );
    }

    return res.json() as Promise<T>;
};

export default fetcher;