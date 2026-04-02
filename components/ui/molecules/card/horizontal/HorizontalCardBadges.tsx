import Badge from "@/atoms/badge/Badge";
import BadgeDTO from "@/presentation/view/models/atoms/badge/dto";

interface HorizontalCardBadgesProps {
    badges?: BadgeDTO[];
    className?: string;
}

const HorizontalCardBadges: React.FC<HorizontalCardBadgesProps> = ({ badges, className }) => {
    return badges && badges.length > 0 && (
        <div className={`flex flex-wrap gap-2 ${className || "pt-1"}`}>
            {badges.map((badge) => (
                <Badge
                    key={badge.id}
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

export default HorizontalCardBadges;