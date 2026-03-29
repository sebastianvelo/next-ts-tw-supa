import StepIcon from "./StepIcon";
import { CONNECTOR_FILL_STYLES, LABEL_BASE_STYLES, NODE_BASE_STYLES, PING_STYLES, getConnectorStyles, getLabelStyles, getNodeStyles } from "./styles";
import { StepStatus } from "./types";

interface WizardStepsIndicatorProps {
    steps: string[];
    goTo: (next: number) => void
    currentStep: number;
    stepStatuses?: StepStatus[];
}

const WizardStepsIndicator: React.FC<WizardStepsIndicatorProps> = ({ steps, goTo, currentStep, stepStatuses }) => (
    <div className="flex items-center justify-center gap-0 py-6 bg-gradient-to-r from-secondary-100 via-white to-secondary-100 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950 w-full">
        {steps.map((step, i) => {
            const isCurrent = i === currentStep;
            const status: StepStatus = isCurrent ? "pending" : (stepStatuses?.[i] ?? (i < currentStep ? "completed" : "pending"));

            return (
                <div key={step} className="flex items-center">
                    <div className="flex flex-col items-center gap-1">
                        <button
                            onClick={() => i < currentStep && goTo(i)}
                            disabled={i >= currentStep}
                            className={`${NODE_BASE_STYLES} ${getNodeStyles(status, isCurrent)}`}
                        >
                            <StepIcon status={isCurrent ? "pending" : status} index={i} />
                            {isCurrent && <span className={PING_STYLES} />}
                        </button>
                        <span className={`${LABEL_BASE_STYLES} ${getLabelStyles(isCurrent, status)}`}>
                            {step}
                        </span>
                    </div>
                    {i < steps.length - 1 && (
                        <div className={getConnectorStyles(status)}>
                            <div className={CONNECTOR_FILL_STYLES(status === "completed")} />
                        </div>
                    )}
                </div>
            );
        })}
    </div>
);

export default WizardStepsIndicator;