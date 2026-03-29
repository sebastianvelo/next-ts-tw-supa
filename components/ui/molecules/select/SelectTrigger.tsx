"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import { selectStyles } from "./styles";
import { ChangeEvent } from "react";
import Text from "@/components/ui/atoms/text/Text";

interface SelectTriggerProps {
    id: string;
    isOpen: boolean;
    selectedLabel: string;
    onToggle: () => void;
    type?: "select" | "combobox";
    searchTerm?: string;
    onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onInputFocus?: () => void;
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({
    id, isOpen, selectedLabel, onToggle, type = "select", searchTerm = "", onSearchChange, onInputFocus
}) => (
    <div
        id={id}
        className={`${selectStyles.trigger} ${isOpen ? selectStyles.triggerOpen : ""} cursor-pointer`}
        onClick={type === "select" ? onToggle : undefined}
        role="combobox"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${id}-listbox`}
    >
        {type === "select" ? (
            <Text size="sm">{selectedLabel}</Text>
        ) : (
            <input
                type="text"
                className="w-full bg-transparent outline-none cursor-text truncate text-secondary-900 dark:text-white placeholder:text-secondary-500 dark:placeholder:text-secondary-400"
                placeholder={selectedLabel || "Search..."}
                value={isOpen ? searchTerm : selectedLabel}
                onChange={onSearchChange}
                onFocus={onInputFocus}
                onClick={(e) => {
                    if (!isOpen && onInputFocus) {
                        onInputFocus();
                    }
                }}
            />
        )}
        <button
            type="button"
            onClick={(e) => {
                e.stopPropagation();
                onToggle();
            }}
            className="flex-shrink-0 ml-2 outline-none"
        >
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
    </div>
);

export default SelectTrigger;