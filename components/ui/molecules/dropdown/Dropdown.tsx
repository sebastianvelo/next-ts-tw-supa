import useClickOutside from "@/hooks/app/useClickOutside";
import React, { useRef, useState } from "react";

interface DropdownProps {
    children: React.ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    useClickOutside(containerRef, () => setIsOpen(false));

    return (
        <div className="z-50 relative" ref={containerRef}>
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {children[0]}
            </div>
            {isOpen && (
                <div className="absolute right-0 top-max">
                    {...children.slice(1)}
                </div>
            )}
        </div>
    );
};

export default Dropdown;