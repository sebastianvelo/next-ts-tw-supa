import ListSectionDTO from "@/core/view/DTO/list-section";

export interface TextContainerDTO {
    subtitle?: string;
    content: string;
};

export interface TextListSectionDTO extends ListSectionDTO<TextContainerDTO> { }