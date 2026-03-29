import ToastContext, { ToastContextValue } from "@/context/toast/ToastContext";
import { useContext } from "react";

const useToast = (): ToastContextValue => {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within a ToastProvider");
    return context;
};

export default useToast;