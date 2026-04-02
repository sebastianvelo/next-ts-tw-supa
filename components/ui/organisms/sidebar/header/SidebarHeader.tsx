"use client"
import Text from "@/components/ui/atoms/text/Text";
import Title from "@/components/ui/atoms/title/Title";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarHeaderProps {
    title: string;
    subtitle?: string;
    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ title, subtitle, isCollapsed, setIsCollapsed }) => (
    <div className="flex items-center p-6 shrink-0 min-h-[88px] relative">
        <div className={`flex flex-col overflow-hidden transition-all duration-300 ${isCollapsed ? "opacity-0 w-0" : "opacity-100 w-full"}`}>
            <Title level="h4" size="md" className="font-bold text-secondary-900 dark:text-white truncate">
                {title}
            </Title>
            {subtitle && (
                <Text size="xs" className="uppercase tracking-wider text-secondary-500 font-semibold truncate mt-1">
                    {subtitle}
                </Text>
            )}
        </div>

        {/* Collapse Toggle */}
        <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`
                        absolute p-1.5 rounded-full bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700
                        text-secondary-500 hover:text-secondary-900 dark:hover:text-white transition-colors
                        focus:outline-none focus:ring-2 focus:ring-primary-500
                        ${isCollapsed ? "left-[50%] -translate-x-[50%]" : "-right-3"}
                        z-10
                    `}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
    </div>
);

export default SidebarHeader;
