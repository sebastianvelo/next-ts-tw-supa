export type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "danger" | "success";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonRounded = "sm" | "md" | "lg" | "full";

export interface ButtonStyleProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: ButtonRounded;
}