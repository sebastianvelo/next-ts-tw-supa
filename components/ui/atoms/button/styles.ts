import { ButtonRounded, ButtonSize, ButtonStyleProps, ButtonVariant } from "./types";

const baseStyles = "font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary-400 text-white hover:bg-primary-500 focus:ring-primary-500 dark:bg-primary-700 dark:text-white dark:hover:bg-primary-800 dark:focus:ring-primary-400",
    accent: "bg-accent-400 text-white hover:bg-accent-500 focus:ring-accent-500 dark:bg-accent-700 dark:text-white dark:hover:bg-accent-800 dark:focus:ring-accent-400",
    secondary: "bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 text-secondary-500 hover:text-secondary-900 dark:hover:text-white dark:focus:ring-secondary-400",
    ghost: "bg-transparent text-secondary-700 hover:bg-white/50 focus:ring-secondary-500 dark:text-secondary-200 dark:hover:bg-black/50 dark:focus:ring-secondary-400",
    danger: "bg-danger-500 text-white hover:bg-red-600 focus:ring-danger-500 dark:bg-danger-700 dark:text-white dark:hover:bg-danger-800 dark:focus:ring-danger-400",
    success: "bg-success-500 text-white hover:bg-success-600 focus:ring-success-500 dark:bg-success-700 dark:text-white dark:hover:bg-success-800 dark:focus:ring-success-400",
};

const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
};

const roundeds: Record<ButtonRounded, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
};

const getStyle = ({ variant = "primary", size = "md", rounded = "md" }: ButtonStyleProps) =>
    `${baseStyles} ${variants[variant]} ${sizes[size]} ${roundeds[rounded]}`;

export default getStyle;