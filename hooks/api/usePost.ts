import { useCallback, useState } from "react";

interface UsePostOptions<T, R> {
    url: string;
    onSuccess?: (response: R) => void;
    onError?: (error: Error) => void;
    headers?: HeadersInit;
}

interface UsePostReturn<T, R> {
    post: (data: T) => Promise<R | null>;
    isLoading: boolean;
    error: Error | null;
    data: R | null;
    reset: () => void;
}

const usePost = <T = any, R = any>({ url, onSuccess, onError, headers = {} }: UsePostOptions<T, R>): UsePostReturn<T, R> => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<R | null>(null);

    const post = useCallback(
        async (body: T): Promise<R | null> => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...headers,
                    },
                    body: JSON.stringify(body),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const result = await response.json();
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
        [url, headers, onSuccess, onError]
    );

    const reset = useCallback(() => {
        setIsLoading(false);
        setError(null);
        setData(null);
    }, []);

    return {
        post,
        isLoading,
        error,
        data,
        reset,
    };
};

export default usePost;