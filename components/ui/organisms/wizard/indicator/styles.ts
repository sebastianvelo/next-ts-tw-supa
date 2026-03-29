import { StepStatus } from "./types";

export const getNodeStyles = (status: StepStatus, isCurrent: boolean): string => {
    if (isCurrent) return "bg-secondary-100 dark:bg-secondary-950 border-2 border-primary-500 dark:border-primary-300 text-primary-500 dark:text-primary-300 shadow-md scale-110";
    if (status === "completed") return "bg-success-500 text-white cursor-pointer hover:opacity-80 scale-95";
    if (status === "warning") return "bg-warning-500 text-white cursor-pointer hover:opacity-80 scale-95";
    return "bg-secondary-400 text-secondary-800 cursor-not-allowed";
};
export const getLabelStyles = (isCurrent: boolean, status: StepStatus): string => {
    if (isCurrent) return "text-primary-500";
    if (status === "completed") return "text-success-500";
    if (status === "warning") return "text-warning-500";
    return "text-secondary-500";
};
export const getConnectorStyles = (status: StepStatus): string => `relative mx-2 h-[3px] w-12 overflow-hidden rounded-full ${status === "completed" ? "bg-success-300" :
    status === "warning" ? "bg-warning-300" :
        "bg-secondary-300 dark:bg-secondary-700"}`;

export const NODE_BASE_STYLES = "animate-slide-in-left relative flex items-center justify-center w-9 h-9 rounded-full text-sm font-semibold transition-all duration-300 outline-none";

export const PING_STYLES = "absolute inset-0 rounded-full border-2 border-primary-500 opacity-30 animate-ping";

export const CONNECTOR_FILL_STYLES = (isCompleted: boolean): string => `absolute inset-y-0 left-0 ${isCompleted ? "bg-success-300 w-full" : "bg-secondary-300 dark:bg-secondary-700 w-0"} rounded-full transition-all duration-1000 ease-out`;

export const LABEL_BASE_STYLES = "text-xs font-medium transition-colors duration-200";
