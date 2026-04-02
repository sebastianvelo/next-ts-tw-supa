import type { BadgeVariant } from "@/presentation/view/models/atoms/badge/dto";

export type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl";

export type BadgeRounded = "none" | "sm" | "md" | "lg" | "full";

export type BadgeTransform = "uppercase" | "lowercase" | "capitalize" | "normal-case";

export interface BadgeStyleProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    rounded?: BadgeRounded;
    transform?: BadgeTransform;
}