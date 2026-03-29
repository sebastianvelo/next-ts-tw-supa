import PageHeaderDTO from "@/presentation/view/dto/page/header";
import UIType from "@/presentation/view/registry/types";

export interface MultiSectionViewItemDTO<TContent extends object> {
    id: string;
    label: string;
    ui: UIType;
    content: TContent;
}

interface MultiSectionViewDTO {
    header?: PageHeaderDTO;
    items: MultiSectionViewItemDTO<any>[];
}

export default MultiSectionViewDTO;