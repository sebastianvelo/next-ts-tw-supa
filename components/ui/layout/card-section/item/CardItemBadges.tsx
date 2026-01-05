import Badge from "@/components/ui/atoms/badge/Badge";
import { CardItemDTO } from "@/core/view/DTO/list-section/card-list-section";

export interface CardItemBadgesProps extends Pick<CardItemDTO, "badges"> { }

const CardItemBadges: React.FC<CardItemBadgesProps> = ({ badges }) => {
    return badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
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