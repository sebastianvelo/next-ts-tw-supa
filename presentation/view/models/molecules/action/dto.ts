import HttpMethod from "@/core/types/HttpMethod";

export enum ActionVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    ACCENT = "accent",
    GHOST = "ghost",
    DANGER = "danger",
    SUCCESS = "success"
}

export enum ActionType {
    MUTATION = "mutation",
    LINK = "link",
}

interface ActionFeedback {
    message: string;
    goTo?: string;
}

interface ActionDTO<T = any> {
    label?: string;
    value?: string;
    variant: ActionVariant;
    type?: ActionType;
    // mutation
    apiRoute?: string;
    method?: HttpMethod;
    body?: T;
    requiresConfirmation?: boolean;
    confirmationMessage?: string;
    success?: ActionFeedback;
    error?: ActionFeedback;
    // link
    href?: string;
    external?: boolean;
}

export default ActionDTO;