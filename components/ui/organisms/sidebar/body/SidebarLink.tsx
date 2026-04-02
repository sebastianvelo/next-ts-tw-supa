"use client"
import Text from "@/components/ui/atoms/text/Text";
import useI18N from "@/hooks/lang/useI18N";
import Link from "next/link";
import { SidebarOption } from "../types";
import { usePathname } from "next/navigation";
import { AppIcon } from "@/components/ui/icons";

interface SidebarLinkProps {
    option: SidebarOption;
    isCollapsed: boolean;
}

const SidebarLink = ({ option, isCollapsed }: SidebarLinkProps) => {
    const { t: translate } = useI18N();
    const label = option.t ? translate(option.t) : option.label;
    const pathname = usePathname();
    const isActive = pathname === option.href || pathname.startsWith(option.href || "");

    const content = (
        <div
            onClick={option.onClick}
            className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer w-full
                ${isActive
                    ? "bg-secondary-100 dark:bg-secondary-800 text-primary-600 dark:text-primary-400 font-medium"
                    : "text-secondary-600 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800/50 hover:text-secondary-900 dark:hover:text-secondary-100"
                }
            `}
            title={isCollapsed ? label : undefined}
        >
            {option.icon && (
                <div className={`shrink-0 flex items-center justify-center ${isActive ? "text-primary-500 dark:text-primary-400" : ""}`}>
                    {typeof option.icon === "string" ? <AppIcon name={option.icon as any} size={20} /> : option.icon}
                </div>
            )}

            <div className={`
                overflow-hidden transition-all duration-300 whitespace-nowrap
                ${isCollapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"}
            `}>
                <Text size="sm" as="span" className="font-inherit">
                    {label}
                </Text>
            </div>
        </div>
    );

    if (option.href && !option.onClick) {
        return (
            <Link href={option.href} className="block w-full">
                {content}
            </Link>
        );
    }

    return content;
};

export default SidebarLink;