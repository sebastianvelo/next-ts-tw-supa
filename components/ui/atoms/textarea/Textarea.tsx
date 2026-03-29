"use client"
import useI18N from "@/hooks/lang/useI18N";
import getStyle from "./styles";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, error, className = "", ...props }) => {
    const { t } = useI18N();

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                    {t(label)}
                </label>
            )}
            <textarea className={`${getStyle({ variant: error ? "error" : "default" })} ${className}`}
                {...props} placeholder={t(props.placeholder)}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
};

export default Textarea;