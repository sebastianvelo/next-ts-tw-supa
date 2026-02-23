import Button from "@/components/ui/atoms/button/Button";
import PaginatorDTO from "@/core/view/DTO/common/paginator";
import QueryParam from "@/routes/types/params.routes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginatorProps extends PaginatorDTO { }

const Paginator: React.FC<PaginatorProps> = ({ total, page, maxPages }) => {
    if (total === 1) return null;

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

    const calculateStartPage = () => {
        if (total <= maxPages) {
            return 1;
        }
        let startPage = currentPage - (maxPages - 2);

        if (startPage < 1) {
            startPage = 1;
        }
        if (startPage + maxPages - 1 > total) {
            startPage = total - maxPages + 1;
        }

        return startPage;
    };

    const startPage = calculateStartPage();
    const pages = Array.from({ length: Math.min(maxPages, total) }, (_, i) => startPage + i);

    return (
        <div className="flex space-x-2 items-center justify-center">
            <Button variant="secondary" onClick={prev} disabled={prevDisabled}>
                <ChevronLeft />
            </Button>
            {pages.map((pageNum) => (
                <Button key={pageNum} variant={pageNum === currentPage ? "primary" : "secondary"} onClick={() => setPage(pageNum.toString())}>
                    {pageNum}
                </Button>
            ))}
            <Button variant="secondary" onClick={next} disabled={nextDisabled}>
                <ChevronRight />
            </Button>
        </div>
    );
};

export default Paginator;