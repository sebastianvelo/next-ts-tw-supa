"use client"
import Text from "@/atoms/text/Text";
import useI18N from "@/hooks/lang/useI18N";
import getStyle from "./styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className = "", ...props }) => {
    const { t } = useI18N();
    const isCheckable = props.type === "checkbox" || props.type === "radio";

    const containerClass = isCheckable ?
        `flex flex-row-reverse justify-end items-center gap-2` :
        `w-full`;

    return (
        <div className={containerClass}>
            {label && (
                <label htmlFor={props.id} className="block font-medium text-secondary-700 dark:text-secondary-300 py-1">
                    <Text size="sm">{t(label)}</Text>
                </label>
            )}
            <input
                id={props.id}
                className={`${getStyle({ variant: error ? "error" : "default", isCheckable })} ${className}`}
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