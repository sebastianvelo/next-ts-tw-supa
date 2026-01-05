import Badge from "@/components/ui/atoms/badge/Badge";
import Title from "@/components/ui/atoms/title/Title";
import FilterBadgeDTO from "@/core/view/DTO/filter/filter-badge";
import QueryParam from "@/routes/types/params.routes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

interface FilterBadgeProps extends FilterBadgeDTO { }

const FilterBadge: React.FC<FilterBadgeProps> = ({ badges, param, title }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentParam = searchParams.get(param);
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current && !currentParam) {
            const activeBadge = badges.find(badge => badge.active);
            if (activeBadge?.id) {
                setFilter(activeBadge.id);
            }
            initialized.current = true;
        }
    }, []);

    const setFilter = (value?: string | null) => {
        const params = new URLSearchParams(searchParams);
        if (!value) {
            params.delete(param);
        } else {
            params.set(param, value);
        }

        params.delete(QueryParam.PAGE);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="w-full bg-white/50 dark:bg-black/20 border-b border-secondary-300 dark:border-secondary-800 backdrop-blur-xl space-y-2 p-4">
            <Title size="sm" t={title} />
            <div className="flex space-x-2">
                {badges.map((badge) => (
                    <Badge
                        key={badge.id}
                        className="cursor-pointer"
                        onClick={() => setFilter(badge.id === currentParam ? null : badge.id)}
                        {...badge}
                        variant={badge.id === currentParam ? badge.variant || "primary" : "default"}
                        rounded="sm"
                        size="lg"
                    />
                ))}
            </div>
        </div>
    );
};

export default FilterBadge;