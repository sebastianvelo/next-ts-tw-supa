import Icons from "@/presentation/view/registry/icon-type";
import ActionDTO from "../molecules/action/dto";

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