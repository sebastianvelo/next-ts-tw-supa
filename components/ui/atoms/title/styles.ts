import { TitleAlign, TitleSize, TitleStyleProps, TitleVariant } from "./types";

const baseStyles = "font-black leading-tight font-manrope";

const sizes: Record<TitleSize, string> = {
    xs: "text-base xl:text-lg",
    sm: "text-lg xl:text-xl",
    md: "text-xl xl:text-2xl",
    lg: "text-2xl xl:text-3xl",
    xl: "text-3xl xl:text-4xl",
    "2xl": "text-4xl xl:text-5xl",
    "3xl": "text-5xl xl:text-6xl",
};

const variants: Record<TitleVariant, string> = {
    primary: "text-primary-700 dark:text-primary-300",
    secondary: "text-secondary-700 dark:text-secondary-300",
    success: "text-success-700 dark:text-success-300",
    danger: "text-danger-700 dark:text-danger-300",
    warning: "text-warning-700 dark:text-warning-300",
    info: "text-info-700 dark:text-info-300",
    default: "text-secondary-900 dark:text-secondary-100"
};

const aligns: Record<TitleAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
};

const getStyle = ({ size = "md", variant = "default", align = "left" }: TitleStyleProps) =>
    `${baseStyles} ${variants[variant]} ${sizes[size]} ${aligns[align]}`;

export default getStyle;