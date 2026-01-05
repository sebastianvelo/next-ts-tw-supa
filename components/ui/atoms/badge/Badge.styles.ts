import { BadgeRounded, BadgeSize, BadgeStyleProps, BadgeTransform, BadgeVariant } from "./types";

const variants: Record<BadgeVariant, string> = {
    primary: "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 border border-primary-200 dark:border-primary-800",
    secondary: "bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-300 border border-secondary-200 dark:border-secondary-800",
    accent: "bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300 border border-accent-200 dark:border-accent-800",
    success: "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-300 border border-success-200 dark:border-success-800",
    danger: "bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-300 border border-danger-200 dark:border-danger-800",
    warning: "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-300 border border-warning-200 dark:border-warning-800",
    info: "bg-info-100 text-info-700 dark:bg-info-900/30 dark:text-info-300 border border-info-200 dark:border-info-800",
    default: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700",
    neutral: "bg-gray-50 text-gray-600 dark:bg-gray-900/50 dark:text-gray-400 border border-gray-200 dark:border-gray-800",
    outline: "bg-transparent text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600",
};

const sizes: Record<BadgeSize, string> = {
    xs: "px-2 py-0.5 text-xs gap-1",
    sm: "px-2.5 py-1 text-xs gap-1",
    md: "px-3 py-1 text-sm gap-1.5",
    lg: "px-3.5 py-1.5 text-sm gap-2",
    xl: "px-4 py-2 text-base gap-2",
};

const rounded: Record<BadgeRounded, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
};

const transforms: Record<BadgeTransform, string> = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "normal-case": "normal-case",
};

const getStyle = ({ variant = "default", size = "md", rounded: roundedProp = "full", transform = "normal-case" }: BadgeStyleProps) =>
    `inline-flex items-center justify-center font-medium transition-all duration-200 ${transforms[transform]} ${variants[variant]} ${sizes[size]} ${rounded[roundedProp]}`;

export default getStyle;