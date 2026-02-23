"use client"
import { SelectOption } from "@/components/ui/molecules/select/hooks/useSelectInput";
import { selectStyles } from "./Select.styles";

interface SelectOptionsProps {
    options: SelectOption[];
    selectedValue: string | number;
    isOpen: boolean;
    labelledById: string;
    onSelect: (option: SelectOption) => void;
    t: (key: string) => string;
}

const SelectOptions: React.FC<SelectOptionsProps> = ({ options, selectedValue, isOpen, labelledById, onSelect, t }) => (
    <ul
        className={`${selectStyles.list} ${isOpen ? selectStyles.listOpen : selectStyles.listClosed}`}
        role="listbox"
        aria-labelledby={labelledById}
    >
        {options.map((option) => (
            <button
                key={option.value}
                type="button"
                className={selectStyles.option}
                onClick={() => onSelect(option)}
                role="option"
                aria-selected={option.value === selectedValue}
            >
                {t(option.label)}
            </button>
        ))}
    </ul>
);

export default SelectOptions;