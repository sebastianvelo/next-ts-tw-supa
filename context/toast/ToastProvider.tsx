"use client"
import Toast from "@/components/ui/molecules/toast/Toast";
import { ToastMessage, ToastVariant } from "@/components/ui/molecules/toast/types/types";
import { FC, ReactNode, useState } from "react";
import ToastContext from "./ToastContext";

const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const showToast = (text: string, variant: ToastVariant = "success") => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, variant, text }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    };

    const handleClose = (id: number) => setToasts(prev => prev.filter(t => t.id !== id))

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="relative flex flex-col space-y-2 z-50 pointer-events-none">
                {toasts.map(({ id, variant, text }) => (
                    <Toast key={id} variant={variant} message={text} close={() => handleClose(id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export default ToastProvider;