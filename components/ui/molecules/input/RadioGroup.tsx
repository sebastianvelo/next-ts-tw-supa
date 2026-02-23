import Input from "@/components/ui/atoms/input/Input";

const radioStyle = `
    appearance-none
    w-4 h-4 rounded-full
    border-2 border-secondary-300 dark:border-secondary-600
    bg-white dark:bg-secondary-900
    checked:border-primary-500 dark:checked:border-primary-400
    checked:bg-primary-500 dark:checked:bg-primary-400
    checked:ring-2 checked:ring-primary-500/30 dark:checked:ring-primary-400/30
    focus:outline-none focus:ring-2 focus:ring-primary-500/50
    cursor-pointer transition-all duration-200
`;

interface RadioGroupProps {
    id: string;
    value?: string;
    options?: string[];
    onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ id, value = "", options, onChange }) => (
    <ul className="space-y-2">
        {options?.map((option) => (
            <li key={option}>
                <Input
                    type="radio"
                    name={`question-${id}`}
                    id={`question-${id}-${option}`}
                    value={option}
                    label={option}
                    checked={value === option}
                    onChange={() => onChange(option)}
                    className={radioStyle}
                />
            </li>
        ))}
    </ul>
);

export default RadioGroup;