import QueryParam from "@/routes/types/params.routes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface UsePaginatorProps {
    total: number;
    page?: number;
    maxPages: number;
}

const usePaginator = ({ total, page, maxPages }: UsePaginatorProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get(QueryParam.PAGE) || page || 1);

    const setPage = (value?: string | null) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set(QueryParam.PAGE, value);
        } else {
            params.delete(QueryParam.PAGE);
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    const prevDisabled = currentPage === 1;
    const nextDisabled = currentPage === total;

    const prev = () => !prevDisabled && setPage((currentPage - 1).toString());
    const next = () => !nextDisabled && setPage((currentPage + 1).toString());

    const calculateStartPage = (): number => {
        if (total <= maxPages) return 1;

        let startPage = currentPage - (maxPages - 2);
        if (startPage < 1) startPage = 1;
        if (startPage + maxPages - 1 > total) startPage = total - maxPages + 1;

        return startPage;
    };

    const startPage = calculateStartPage();
    const pages = Array.from({ length: Math.min(maxPages, total) }, (_, i) => startPage + i);

    return { currentPage, pages, prevDisabled, nextDisabled, prev, next, setPage };
};

export default usePaginator;