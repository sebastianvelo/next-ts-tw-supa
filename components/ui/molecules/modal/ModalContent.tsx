import Title from "@/components/ui/atoms/title/Title";
import { X } from "lucide-react";
import React, { ReactNode } from "react";

export interface ModalContentProps {
    children: ReactNode;
    title?: string;
    className?: string;
    isOpen: boolean;
    closeModal: () => void;
    handleOutsideClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ children, title, className = "", isOpen, closeModal, handleOutsideClick, }) => {
    return isOpen ? (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50" onClick={handleOutsideClick}>
            <div className={`animate-slide-in-bottom absolute dark:border-primary-100/20 border-primary-500/30 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-lg shadow-xl p-6 w-full transform transition-all duration-300 ${className}`} onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    {title && (
                        <Title t={title} />
                    )}
                    <button className="text-red-400 hover:text-red-500 dark:text-secondary-100 dark:hover:text-accent-500 focus:outline-none" onClick={closeModal}>
                        <X />
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    ) : null;
};

export default ModalContent;