import { AvatarRounded, AvatarSize, AvatarStyleProps, AvatarVariant } from "./types";

const baseStyles = "overflow-hidden transition-opacity";

const sizes: Record<AvatarSize, string> = {
    sm: "w-6 h-6",
    md: "w-9 h-9",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
};

const roundeds: Record<AvatarRounded, string> = {
    full: "rounded-full",
    lg: "rounded-lg",
    md: "rounded-md",
    none: "rounded-none",
};

const variants: Record<AvatarVariant, string> = {
    default: "bg-white dark:bg-secondary-800 border border-black/20 dark:border-white/10",
    bordered: "bg-white dark:bg-secondary-800 border-2 border-primary-400 dark:border-primary-600",
    ghost: "bg-secondary-100 dark:bg-secondary-900 border border-transparent",
};

const getStyle = ({ size = "md", rounded = "full", variant = "default" }: AvatarStyleProps) =>
    `${baseStyles} ${sizes[size]} ${roundeds[rounded]} ${variants[variant]}`;

export default getStyle;