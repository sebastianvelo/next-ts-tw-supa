import BadgeDTO from "@/core/view/DTO/common/badge";

interface FilterBadgeDTO {
    title?: string;
    badges: BadgeDTO[];
    param: string;
}

export default FilterBadgeDTO;