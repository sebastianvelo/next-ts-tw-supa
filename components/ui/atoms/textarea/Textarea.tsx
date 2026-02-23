import useI18N from "@/hooks/lang/useI18N";
import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
            <textarea className={`dark:bg-secondary-950/50 dark:text-secondary-50 w-full px-3 py-2 border border-secondary-300 dark:border-secondary-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${error ? "border-red-500" : ""} ${className}`}
                {...props} placeholder={t(props.placeholder)}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
};

export default Textarea;