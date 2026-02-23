import Badge from "@/components/ui/atoms/badge/Badge";
import FiltersSectionDTO from "@/core/view/DTO/filter/filters-section";
import QueryParam from "@/routes/types/params.routes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import Text from "@/components/ui/atoms/text/Text";

interface FiltersSectionProps extends FiltersSectionDTO {
    className?: string;
}

const FiltersSection: React.FC<FiltersSectionProps> = ({ badges, param, title, className }) => {
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
        if (value) {
            params.set(param, value);
        } else {
            params.delete(param);
        }

        params.delete(QueryParam.PAGE);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className={`${className} w-full bg-gradient-to-r from-white via-secondary-100/30 to-white dark:from-black dark:via-secondary-950/80 dark:to-black border-b border-secondary-300 dark:border-secondary-800 backdrop-blur-xl space-y-2 p-4`}>
            <Text size="sm" transform="uppercase" weight="bold" t={title} />
            <div className="flex space-x-2 pt-2">
                {badges.map((badge) => (
                    <Badge
                        key={badge.id}
                        className="cursor-pointer"
                        onClick={() => setFilter(badge.id === currentParam ? null : badge.id)}
                        {...badge}
                        variant={badge.id === currentParam ? badge.variant || "primary" : "default"}
                        rounded="full"
                        size="lg"
                    />
                ))}
            </div>
        </div>
    );
};

export default FiltersSection;