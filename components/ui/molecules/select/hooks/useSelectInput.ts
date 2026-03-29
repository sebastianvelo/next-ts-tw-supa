"use client"
import useClickOutside from "@/hooks/app/useClickOutside";
import { useRef, useState } from "react";

export interface SelectOption {
    label: string;
    value: string | number;
}

interface UseSelectInputProps {
    options: SelectOption[];
    initialValue?: string | number;
    onChange?: (value: string | number) => void;
}

interface UseSelectInput {
    selectedValue: string | number;
    selectedLabel: string;
    isOpen: boolean;
    selectRef: React.RefObject<HTMLDivElement | null>;
    setIsOpen: (isOpen: boolean) => void;
    toggleDropdown: () => void;
    handleOptionSelect: (option: SelectOption) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const useSelectInput = ({ options, initialValue = "", onChange }: UseSelectInputProps): UseSelectInput => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | number>(initialValue);
    const [searchTerm, setSearchTerm] = useState("");
    const selectRef = useRef<HTMLDivElement>(null);

    // Derived directly — no useEffect or extra state needed
    const selectedLabel = options.find(opt => opt.value.toString() === selectedValue.toString())?.label ?? "";

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setSearchTerm("");
        }
    };

    const handleOptionSelect = (option: SelectOption) => {
        setSelectedValue(option.value);
        if (onChange) { onChange(option.value); }
        setIsOpen(false);
        setSearchTerm("");
    };

    useClickOutside(selectRef, () => {
        setIsOpen(false);
        setSearchTerm("");
    });

    return {
        selectedValue,
        selectedLabel,
        isOpen,
        selectRef,
        setIsOpen,
        toggleDropdown,
        handleOptionSelect,
        searchTerm,
        setSearchTerm
    };
};

export default useSelectInput;