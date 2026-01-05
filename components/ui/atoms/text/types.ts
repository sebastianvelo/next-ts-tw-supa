export type TextHeight = "body" | "caption" | "label" | "helper";
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TextWeight = "normal" | "medium" | "semibold" | "bold";
export type TextAlign = "left" | "center" | "right" | "justify";
export type TextTransform = "uppercase" | "lowercase" | "capitalize" | "normal-case";
export type TextVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "default";

export interface TextStyleProps {
    height?: TextHeight;
    size?: TextSize;
    weight?: TextWeight;
    align?: TextAlign;
    transform?: TextTransform;
    variant?: TextVariant;
}

