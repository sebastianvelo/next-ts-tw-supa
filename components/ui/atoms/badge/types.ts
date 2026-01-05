export type BadgeVariant =
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "default"
    | "neutral"
    | "outline";

export type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl";

export type BadgeRounded = "none" | "sm" | "md" | "lg" | "full";

export type BadgeTransform = "uppercase" | "lowercase" | "capitalize" | "normal-case";

export interface BadgeStyleProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    rounded?: BadgeRounded;
    transform?: BadgeTransform;
}