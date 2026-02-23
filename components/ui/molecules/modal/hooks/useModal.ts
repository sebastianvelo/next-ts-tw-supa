import { useState, useEffect } from "react";

type UseModal = [boolean, () => void, () => void, (e: React.MouseEvent<HTMLDivElement>) => void];

const useModal = (closeOnOutsideClick: boolean): UseModal => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeModal();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (closeOnOutsideClick && e.target === e.currentTarget) {
            closeModal();
        }
    };

    return [isOpen, openModal, closeModal, handleOutsideClick];
};

export default useModal;