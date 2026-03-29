import QueryParam from "@/routes/types/params.routes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type FilterParam = {
    current: string | null;
    set: (value?: string | null) => void;
};

const useFilterParam = (param: string): FilterParam => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const current = searchParams.get(param);

    const set = (value?: string | null) => {
        const params = new URLSearchParams(searchParams);

        if (value) params.set(param, value);
        else params.delete(param);

        params.delete(QueryParam.PAGE);
        router.push(`${pathname}?${params.toString()}`);
    };

    return { current, set };
};

export default useFilterParam;