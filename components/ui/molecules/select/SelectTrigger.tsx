"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import { selectStyles } from "./Select.styles";

interface SelectTriggerProps {
    id: string;
    isOpen: boolean;
    selectedLabel: string;
    onToggle: () => void;
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({ id, isOpen, selectedLabel, onToggle }) => (
    <button
        type="button"
        id={id}
        className={`${selectStyles.trigger} ${isOpen ? selectStyles.triggerOpen : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
    >
        <span>{selectedLabel}</span>
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
    </button>
);

export default SelectTrigger;