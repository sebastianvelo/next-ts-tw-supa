"use client"
import Action from "@/molecules/action/Action";
import ActionDTO from "@/presentation/view/dto/molecules/action/dto";
import { SidebarOptions } from "../types";
import SidebarLink from "./SidebarLink";

interface SidebarProps {
    options: SidebarOptions;
    actions?: ActionDTO[];
    isCollapsed: boolean;
}

const SidebarBody: React.FC<SidebarProps> = ({ options, actions = [], isCollapsed }) => (
    <div className="flex-1 flex flex-col justify-between overflow-y-auto overflow-x-hidden scrollbar-primary px-4 pb-6">
        <nav className="flex flex-col gap-1 w-full">
            {options.body.map((opt, idx) => (
                <SidebarLink key={idx} option={opt} isCollapsed={isCollapsed} />
            ))}
        </nav>

        <div className="flex flex-col gap-4 mt-8 w-full">
            {actions.length > 0 && !isCollapsed && (
                <div className={`flex flex-col gap-2 transition-all duration-300 w-full ${isCollapsed ? "items-center" : "items-stretch"}`}>
                    {actions.map((action, i) => (
                        <Action key={i} {...action} />
                    ))}
                </div>
            )}

            <nav className="flex flex-col gap-1 w-full border-t border-secondary-200 dark:border-secondary-800 pt-4">
                {options.footer.map((opt, idx) => (
                    <SidebarLink key={idx} option={opt} isCollapsed={isCollapsed} />
                ))}
            </nav>
        </div>
    </div>
);

export default SidebarBody;
