import Badge from "@/atoms/badge/Badge";
import BadgeDTO from "@/presentation/view/dto/atoms/badge/dto";
import { FilterParam } from "../hooks/useFilterParam";

interface FilterBadgeFieldProps extends FilterParam {
    options?: BadgeDTO[];
};

const FilterBadgeField: React.FC<FilterBadgeFieldProps> = ({ options, current, set, }) => (
    <>
        {options?.map((badge, index) => (
            <Badge
                key={badge.id || index}
                className="cursor-pointer"
                onClick={() => set(badge.id === current ? null : badge.id)}
                variant={
                    badge.id === current
                        ? badge.variant || "primary"
                        : "default"
                }
                rounded="full"
                size="lg"
                label={badge.label}
            />
        ))}
    </>
);

export default FilterBadgeField;