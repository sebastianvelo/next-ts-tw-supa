export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarRounded = "full" | "lg" | "md" | "none";
export type AvatarVariant = "default" | "bordered" | "ghost";

export interface AvatarStyleProps {
    size?: AvatarSize;
    rounded?: AvatarRounded;
    variant?: AvatarVariant;
}