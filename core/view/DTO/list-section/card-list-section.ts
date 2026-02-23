import ActionDTO from "@/core/view/DTO/common/action";
import BadgeDTO from "@/core/view/DTO/common/badge";
import ListSectionDTO from "@/core/view/DTO/list-section";

export enum BadgePosition {
    TOP_RIGHT = "tr",
    TOP_LEFT = "tl",
    BOTTOM_RIGHT = "br",
    BOTTOM_LEFT = "bl"
}

export interface CardItemDTO {
    id?: string;
    img?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    href?: string;
    badges?: Partial<Record<BadgePosition, BadgeDTO[]>>;
    actions?: ActionDTO[];
}

export interface CardListSectionDTO extends ListSectionDTO<CardItemDTO> { }