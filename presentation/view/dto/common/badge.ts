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

export type BadgeSettings<T extends string> = Record<T, BadgeVariant>;

interface BadgeDTO {
    id?: string;
    label?: string;
    variant?: BadgeVariant;
    active?: boolean;
}

export default BadgeDTO;