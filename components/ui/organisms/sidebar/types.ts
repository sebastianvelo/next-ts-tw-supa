import { ReactNode } from "react";
import Icons from "@/presentation/view/registry/icon-type";

export interface SidebarOption {
    label: string;
    t?: string;
    icon?: Icons | ReactNode;
    onClick?: () => void;
    href?: string;
}

export interface SidebarOptions {
    body: SidebarOption[];
    footer: SidebarOption[];
}