import BadgeDTO from "@/core/view/DTO/common/badge";

interface FiltersSectionDTO {
    title?: string;
    badges: BadgeDTO[];
    param: string;
}

export default FiltersSectionDTO;