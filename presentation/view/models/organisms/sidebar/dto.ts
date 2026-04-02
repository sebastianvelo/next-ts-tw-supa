import ActionDTO from "@/presentation/view/models/molecules/action/dto";
import Icons from "@/presentation/view/registry/icon-type";

export interface SidebarOptionDTO {
    label: string;
    t?: string;
    icon?: Icons;
    onClick?: () => void;
    href?: string;
}

export interface SidebarOptionsDTO {
    body: SidebarOptionDTO[];
    footer: SidebarOptionDTO[];
}

interface SidebarDTO {
    title: string;
    subtitle?: string;
    options: SidebarOptionsDTO;
    actions?: ActionDTO[];
}

export default SidebarDTO;