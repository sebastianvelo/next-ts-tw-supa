import { TableDataDTO, TableHeaderDTO } from "@/presentation/view/dto/common/table";
import QueryParam from "@/routes/types/params.routes";
import { ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SortDirection = "asc" | "desc" | null;

const useTable = (data: TableDataDTO) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const sortKey = searchParams.get(QueryParam.SORT);
    const sortOrder = searchParams.get(QueryParam.ORDER) as SortDirection;

    const handleSort = (key: string) => {
        const params = new URLSearchParams(searchParams);

        if (sortKey === key) {
            if (sortOrder === "asc") {
                params.set(QueryParam.SORT, key);
                params.set(QueryParam.ORDER, "desc");
            } else {
                // desc -> remove sort (unsorted)
                params.delete(QueryParam.SORT);
                params.delete(QueryParam.ORDER);
            }
        } else {
            params.set(QueryParam.SORT, key);
            params.set(QueryParam.ORDER, "asc");
        }

        // Reset page when sorting changes
        params.delete(QueryParam.PAGE);
        router.push(`${pathname}?${params.toString()}`);
    };

    const renderSortIcon = (header: TableHeaderDTO) => {
        if (!header.sortable) return null;

        if (sortKey === header.key) {
            if (sortOrder === "asc") return <ChevronUp className="w-4 h-4 ml-1 inline-block" />;
            if (sortOrder === "desc") return <ChevronDown className="w-4 h-4 ml-1 inline-block" />;
        }

        // Default unsorted state
        return <ChevronsUpDown className="w-4 h-4 ml-1 inline-block text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />;
    };

    return {
        sortedBody: data.body, // Sorting is now server-side
        handleSort,
        renderSortIcon
    };
};

export default useTable;
