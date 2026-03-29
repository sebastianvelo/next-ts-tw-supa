import type { BadgeVariant } from "@/presentation/view/dto/common/badge";
export type { BadgeVariant };

export type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl";

export type BadgeRounded = "none" | "sm" | "md" | "lg" | "full";

export type BadgeTransform = "uppercase" | "lowercase" | "capitalize" | "normal-case";

export interface BadgeStyleProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    rounded?: BadgeRounded;
    transform?: BadgeTransform;
}