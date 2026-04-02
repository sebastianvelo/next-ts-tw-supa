"use client"
import ActionDTO from "@/presentation/view/dto/molecules/action/dto";
import { useState } from "react";
import SidebarBody from "./body/SidebarBody";
import SidebarHeader from "./header/SidebarHeader";
import { SidebarOptions } from "./types";

interface SidebarProps {
    title: string;
    subtitle?: string;
    options: SidebarOptions;
    actions?: ActionDTO[];
    defaultCollapsed?: boolean;
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ title, subtitle, options, actions = [], defaultCollapsed = false, className = "" }) => {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

    return (
        <aside
            className={`
                relative h-screen flex flex-col
                bg-white dark:bg-secondary-900
                border-r border-secondary-200 dark:border-secondary-800
                transition-all duration-300 z-30
                ${isCollapsed ? "w-[80px]" : "w-[260px]"}
                ${className}
            `}
        >
            <SidebarHeader title={title} subtitle={subtitle} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <SidebarBody options={options} actions={actions} isCollapsed={isCollapsed} />
        </aside>
    );
};

export default Sidebar;
