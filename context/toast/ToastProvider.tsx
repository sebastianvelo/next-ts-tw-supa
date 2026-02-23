"use client"
import Toast from "@/components/ui/molecules/toast/Toast";
import { ToastMessage, ToastVariant } from "@/components/ui/molecules/toast/types/types";
import { FC, ReactNode, useState, useCallback, useMemo } from "react";
import ToastContext from "./ToastContext";

const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const handleClose = useCallback((id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    const showToast = useCallback((text: string, variant: ToastVariant = "success") => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, variant, text }]);
        setTimeout(() => handleClose(id), 3000);
    }, [handleClose]);

    const contextValue = useMemo(() => ({ showToast }), [showToast]);

    return (
        <ToastContext.Provider value={contextValue}>
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