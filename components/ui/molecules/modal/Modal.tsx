import Button from "@/components/ui/atoms/button/Button";
import { ButtonVariant } from "@/components/ui/atoms/button/types";
import useModal from "@/components/ui/molecules/modal/hooks/useModal";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import ModalContent from "./ModalContent";

interface ModalTrigger {
    label: ReactNode;
    variant?: ButtonVariant;
    className?: string;
}

interface ModalProps {
    button?: ModalTrigger;
    customTrigger?: ReactNode;
    children: ReactNode;
    title?: string;
    className?: string;
    closeOnOutsideClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({ button, customTrigger, children, title, className = "", closeOnOutsideClick = true, }) => {
    const [isOpen, openModal, closeModal, handleOutsideClick] = useModal(closeOnOutsideClick);

    return (
        <>
            {button && (
                <Button variant={button.variant} onClick={openModal} className={button.className}>
                    {button.label}
                </Button>
            )}
            {customTrigger && <button className="w-full" onClick={openModal}>{customTrigger}</button>}
            {ReactDOM.createPortal((
                <ModalContent className={className} title={title} isOpen={isOpen} closeModal={closeModal} handleOutsideClick={handleOutsideClick}>
                    {children}
                </ModalContent>
            ), document.body)}
        </>
    );
};

export default Modal;