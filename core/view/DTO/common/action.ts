export type ActionVariant = "primary" | "secondary" | "accent" | "ghost" | "danger";

interface ActionDTO<T = any> {
    label: string;
    variant: ActionVariant;
    apiRoute?: string;
    body?: T;
}

export default ActionDTO;