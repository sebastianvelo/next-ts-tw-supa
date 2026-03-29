import Input from "@/atoms/input/Input";

const checkboxStyle = `
        appearance-none w-4 h-4 rounded
        border-2 border-secondary-300 dark:border-secondary-600
        bg-white dark:bg-secondary-900
        checked:bg-primary-500 dark:checked:bg-primary-400
        checked:border-primary-500 dark:checked:border-primary-400
        group-hover:border-primary-400 dark:group-hover:border-primary-300
        focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:focus:ring-primary-400/50
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer transition-all duration-200
`;

interface CheckboxGroupProps {
    id: string;
    value?: string[];
    options?: string[];
    onChange: (value: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ id, value = [], options, onChange }) => {
    const handleToggle = (option: string) => {
        const newSelection = value.includes(option)
            ? value.filter(item => item !== option)
            : [...value, option];

        onChange(newSelection);
    };

    return (
        <ul className="space-y-2">
            {options?.map((option) => (
                <li key={option}>
                    <Input
                        type="checkbox"
                        id={`question-${id}-${option}`}
                        value={option}
                        label={option}
                        checked={value.includes(option)}
                        onChange={() => handleToggle(option)}
                        className={checkboxStyle}
                    />
                </li>
            ))}
        </ul>
    );
};

export default CheckboxGroup;