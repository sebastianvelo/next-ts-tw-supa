import HttpMethod from "@/core/types/HttpMethod";

export type ActionVariant = "primary" | "secondary" | "accent" | "ghost" | "danger";

interface ActionDTO<T = any> {
    label: string;
    variant: ActionVariant;
    apiRoute?: string;
    method?: HttpMethod;
    body?: T;
    shouldRefresh?: boolean;
    requiresConfirmation?: boolean;
    confirmationMessage?: string;
}

export default ActionDTO;