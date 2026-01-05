import useI18N from "@/hooks/lang/useI18N";
import { X } from "lucide-react";
import React from "react";
import getStyle from "./Badge.styles";
import { BadgeStyleProps } from "./types";

interface BadgeProps extends BadgeStyleProps, React.HTMLAttributes<HTMLSpanElement> {
    label?: string;
    icon?: React.ReactNode;
    onRemove?: () => void;
}

const Badge: React.FC<BadgeProps> = ({ label, variant, size, rounded, transform, icon, onRemove, className = "", ...props }) => {
    const { t } = useI18N();

    return (
        <span className={`${getStyle({ variant, size, rounded, transform })} ${className}`} {...props}>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <span>{t(label)}</span>
            {onRemove && (
                <button type="button" onClick={onRemove} className="flex-shrink-0 hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors" aria-label="Remove badge">
                    <X className="h-3 w-3" />
                </button>
            )}
        </span>
    );
};

export default Badge;