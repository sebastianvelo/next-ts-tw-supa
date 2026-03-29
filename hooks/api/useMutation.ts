import HttpMethod from "@/core/types/HttpMethod";
import { useCallback, useState } from "react";

interface UseMutationOptions<R> {
    url: string;
    method: HttpMethod;
    onSuccess?: (response: R | null) => void;
    onError?: (error: Error) => void;
    headers?: HeadersInit;
}

export type UseMutationWithoutOptions<R> = Omit<UseMutationOptions<R>, "method">;

interface UseMutationReturn<T, R> {
    mutate: (data?: T) => Promise<R | null>;
    isLoading: boolean;
    error: Error | null;
    data: R | null;
    reset: () => void;
}

const useMutation = <T = any, R = any>({
    url,
    method,
    onSuccess,
    onError,
    headers = {},
}: UseMutationOptions<R>): UseMutationReturn<T, R> => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<R | null>(null);

    const mutate = useCallback(
        async (body?: T): Promise<R | null> => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(url, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        ...headers,
                    },
                    body: body ? JSON.stringify(body) : undefined,
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                // 204 No Content no tiene body
                const result = response.status === 204 ? null : await response.json();

                setData(result);
                onSuccess?.(result);
                return result;
            } catch (err) {
                const error = err as Error;
                setError(error);
                onError?.(error);
                return null;
            } finally {
                setIsLoading(false);
            }
        },
        [url, method, headers, onSuccess, onError]
    );

    const reset = useCallback(() => {
        setIsLoading(false);
        setError(null);
        setData(null);
    }, []);

    return { mutate, isLoading, error, data, reset };
};

export default useMutation;