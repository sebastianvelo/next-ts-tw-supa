import useClickOutside from "@/hooks/app/useClickOutside";
import React, { useRef, useState } from "react";

export type DropdownVariant = "floating" | "inline";

interface DropdownProps {
    children: React.ReactNode[];
    variant?: DropdownVariant;
}

const Dropdown: React.FC<DropdownProps> = ({ children, variant = "floating" }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useClickOutside(containerRef, () => setIsOpen(false));

    const isFloating = variant === "floating";

    return (
        <div ref={containerRef} className={`relative ${isFloating ? "inline-block" : "w-full"}`}>
            <div className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
                {children[0]}
            </div>

            {isOpen && (
                <div className={
                    isFloating
                        ? "absolute right-0 top-full mt-0.5 w-max shadow-lg z-50 animate-scale-up"
                        : "mt-2 w-full animate-scale-up"
                }
                >
                    {children.slice(1)}
                </div>
            )}
        </div>
    );
};

export default Dropdown;