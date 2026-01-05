import { TextAlign, TextVariant, TextHeight, TextSize, TextStyleProps, TextTransform, TextWeight } from "./types";

const heights: Record<TextHeight, string> = {
    body: "leading-normal",
    caption: "leading-tight",
    label: "leading-snug font-medium",
    helper: "leading-tight",
};

const sizes: Record<TextSize, string> = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
};

const weights: Record<TextWeight, string> = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
};

const aligns: Record<TextAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
};

const transforms: Record<TextTransform, string> = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "normal-case": "normal-case",
};

const variants: Record<TextVariant, string> = {
    primary: "text-primary-700 dark:text-primary-300",
    secondary: "text-secondary-700 dark:text-secondary-300",
    success: "text-success-700 dark:text-success-300",
    danger: "text-danger-700 dark:text-danger-300",
    warning: "text-warning-700 dark:text-warning-300",
    info: "text-info-700 dark:text-info-300",
    default: "text-secondary-700 dark:text-secondary-300"
};

const getStyle = ({ height = "body", size = "md", weight = "normal", align = "left", transform = "normal-case", variant = "default" }: TextStyleProps) =>
    `${variants[variant]} ${heights[height]} ${sizes[size]} ${weights[weight]} ${aligns[align]} ${transforms[transform]}`;

export default getStyle;
