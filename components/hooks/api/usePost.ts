import HttpMethod from "@/core/types/HttpMethod";
import useMutation, { UseMutationWithoutOptions } from "./useMutation";

const usePost = <T = any, R = any>(options: UseMutationWithoutOptions<R>) => {
    const { mutate, ...rest } = useMutation<T, R>({ ...options, method: HttpMethod.POST });
    return { post: mutate, ...rest };
};

export default usePost;