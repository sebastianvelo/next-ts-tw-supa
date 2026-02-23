import { UIType } from "@/core/view/registry/types";

interface TabDTO<T = object> {
    id: string;
    label: string;
    ui: UIType;
    content: T;
};

export default TabDTO;
