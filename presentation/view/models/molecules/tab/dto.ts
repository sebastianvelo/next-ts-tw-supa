import UIType from "@/presentation/view/registry/ui-type";

interface TabDTO<T = object> {
    id: string;
    label: string;
    ui: UIType;
    content: T;
};

export default TabDTO;
