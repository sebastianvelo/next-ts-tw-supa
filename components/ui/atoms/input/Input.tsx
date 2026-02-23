import Text from "@/components/ui/atoms/text/Text";
import useI18N from "@/hooks/lang/useI18N";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className = "", ...props }) => {
    const { t } = useI18N();
    const isCheckable = props.type === "checkbox" || props.type === "radio";

    const containerClass = isCheckable ?
        `flex flex-row-reverse justify-end items-center gap-2` :
        `w-full`;

    const inputClasses = isCheckable
        ? `focus:outline-none focus:ring-2 focus:ring-primary-500/50 ${className}`
        : `dark:bg-secondary-950/50 dark:text-secondary-50 w-full px-3 py-2 border border-secondary-300 dark:border-secondary-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${error && "border-red-500"} ${className}`;

    return (
        <div className={containerClass}>
            {label && (
                <label htmlFor={props.id} className="block font-medium text-secondary-700 dark:text-secondary-300 py-1">
                    <Text size="sm">{t(label)}</Text>
                </label>
            )}
            <input
                id={props.id}
                className={inputClasses}
                {...props}
                placeholder={props.placeholder ? t(props.placeholder) : undefined}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
};

export default Input;