import ActionDTO from "@/presentation/view/models/molecules/action/dto";
import BadgeDTO from "@/presentation/view/models/atoms/badge/dto";

export enum BadgePosition {
    TOP_RIGHT = "tr",
    TOP_LEFT = "tl",
    BOTTOM_RIGHT = "br",
    BOTTOM_LEFT = "bl"
}

interface CardDTO {
    id?: string;
    img?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    href?: string;
    badges?: Partial<Record<BadgePosition, BadgeDTO[]>>;
    actions?: ActionDTO[];
}

export default CardDTO;
