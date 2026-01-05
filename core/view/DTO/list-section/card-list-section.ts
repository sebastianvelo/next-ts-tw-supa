import BadgeDTO from "@/core/view/DTO/common/badge";
import ListSectionDTO from "@/core/view/DTO/list-section";

export interface CardItemDTO {
    id?: string;
    img?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    href?: string;
    badges?: BadgeDTO[];
}

export interface CardListSectionDTO extends ListSectionDTO<CardItemDTO> { }