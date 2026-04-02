import PageHeaderDTO from "@/presentation/view/models/main/header";
import UIType from "@/presentation/view/registry/ui-type";

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