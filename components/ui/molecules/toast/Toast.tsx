import useI18N from "@/hooks/lang/useI18N";
import { TranslationKey } from "@/locales/wordings";
import { X } from "lucide-react";
import variants from "./common/variants";
import { ToastVariant } from "./types/types";

interface ToastProps {
    variant?: ToastVariant;
    message?: string;
    i18n?: TranslationKey;
    close: () => void;
}

const Toast: React.FC<ToastProps> = ({ close, variant = "success", message, i18n }) => {
    const { t } = useI18N();
    const toastStyle = variants[variant] || variants.success;
    const toastClassName = (variant: ToastVariant) => `animate-slide-in-bottom ${variants[variant].bgColor} ${variants[variant].textColor} border ${variants[variant].borderColor} rounded-lg shadow-lg flex items-center justify-between px-4 py-3 w-1/2 xl:max-w-2xl transition-all duration-300 ease-in-out pointer-events-auto`;

    return (
        <div className="fixed bottom-16 left-1/2 w-full">
            <div className={toastClassName(variant)}>
                <div className="flex items-center">
                    {toastStyle.icon}
                    <p className="ml-3">{i18n ? t(i18n) : message}</p>
                </div>
                <button onClick={close} className="ml-4 text-secondary-500 dark:text-secondary-100 hover:text-secondary-600 dark:hover:text-secondary-200 focus:outline-none">
                    <X />
                </button>
            </div>
        </div>
    );
};

export default Toast;