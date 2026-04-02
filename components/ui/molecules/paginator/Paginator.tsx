import Button from "@/atoms/button/Button";
import PaginatorDTO from "@/presentation/view/dto/molecules/paginator/dto";
import { ChevronLeft, ChevronRight } from "lucide-react";
import usePaginator from "./hooks/usePaginator";

interface PaginatorProps extends PaginatorDTO { }

const Paginator: React.FC<PaginatorProps> = ({ total, page, maxPages }) => {
    const { currentPage, pages, prevDisabled, nextDisabled, prev, next, setPage } = usePaginator({ total, page, maxPages });

    if (total === 1) return null;

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