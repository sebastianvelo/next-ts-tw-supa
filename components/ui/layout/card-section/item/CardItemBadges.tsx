import Badge from "@/components/ui/atoms/badge/Badge";
import BadgeDTO from "@/core/view/DTO/common/badge";

export interface CardItemBadgesProps {
    badges?: BadgeDTO[];
    className?: string;
}

const CardItemBadges: React.FC<CardItemBadgesProps> = ({ badges, className }) => {
    return badges && badges.length > 0 && (
        <div className={`flex flex-wrap gap-2 ${className || "pt-1"}`}>
            {badges.map((badge, index) => (
                <Badge
                    key={index}
                    label={badge.label}
                    variant={badge.variant}
                    transform="uppercase"
                    size="xs"
                    rounded="md"
                />
            ))}
        </div>
    );
};

export default CardItemBadges;