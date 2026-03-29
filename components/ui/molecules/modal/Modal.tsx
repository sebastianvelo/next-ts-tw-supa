import Button from "@/atoms/button/Button";
import { ButtonVariant } from "@/atoms/button/types";
import useModal from "@/molecules/modal/hooks/useModal";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import ModalContent from "./ModalContent";

interface ModalTrigger {
    label?: string;
    variant?: ButtonVariant;
    className?: string;
}

interface ModalProps {
    trigger?: ModalTrigger;
    customTrigger?: ReactNode;
    children: ReactNode;
    title?: string;
    className?: string;
    closeOnOutsideClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({ trigger, customTrigger, children, title, className = "", closeOnOutsideClick = true, }) => {
    const [isOpen, openModal, closeModal, handleOutsideClick] = useModal(closeOnOutsideClick);

    return (
        <>
            {trigger && <Button t={trigger.label} variant={trigger.variant} onClick={openModal} className={trigger.className} />}
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