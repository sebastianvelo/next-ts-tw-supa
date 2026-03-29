import { StepStatus } from "./types";

interface StepIconProps {
    status: StepStatus;
    index: number;
}

const StepIcon: React.FC<StepIconProps> = ({ status, index }) => {
    if (status === "completed") return (
        <svg className="animate-flip-in w-4 h-4 stroke-secondary-100 dark:stroke-secondary-950" viewBox="0 0 16 16" fill="none" strokeWidth="2.5">
            <polyline points="2,8 6,12 14,4" />
        </svg>
    );

    if (status === "warning") return (
        <svg className="animate-flip-in w-4 h-4 stroke-secondary-100 dark:stroke-secondary-950" viewBox="0 0 16 16" fill="none" strokeWidth="2.5">
            <line x1="8" y1="0" x2="8" y2="10" />
            <circle cx="8" cy="14" r="0.5" fill="white" />
        </svg>
    );

    return <span className="animate-flip-in">{index + 1}</span>;
};

export default StepIcon;