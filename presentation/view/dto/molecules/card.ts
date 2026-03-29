import ActionDTO from "@/presentation/view/dto/common/action";
import BadgeDTO from "@/presentation/view/dto/common/badge";

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
