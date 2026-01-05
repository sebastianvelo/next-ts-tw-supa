import { ToastVariant } from '@/components/ui/molecules/toast/types/types';
import { createContext } from 'react';

export interface ToastContextValue {
    showToast: (message: string, type?: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export default ToastContext;