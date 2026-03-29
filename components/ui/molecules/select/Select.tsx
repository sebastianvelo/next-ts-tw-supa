"use client"
import Text from "@/components/ui/atoms/text/Text";
import useSelectInput, { SelectOption } from "@/components/ui/molecules/select/hooks/useSelectInput";
import useI18N from "@/hooks/lang/useI18N";
import { selectStyles } from "./styles";
import SelectOptions from "./SelectOptions";
import SelectTrigger from "./SelectTrigger";
import { syntheticOnChange } from "./utils";

interface SelectProps {
    label?: string;
    name: string;
    value?: string | number;
    defaultValue?: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    className?: string;
    type?: "select" | "combobox";
    placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ label = "", name, value = "", defaultValue, options, className = "", onChange, type = "select", placeholder }) => {
    const { t } = useI18N();
    const {
        selectedLabel, selectedValue, isOpen, selectRef, toggleDropdown, handleOptionSelect, setIsOpen, searchTerm, setSearchTerm
    } = useSelectInput({
        options,
        initialValue: defaultValue || value,
        onChange: (newValue) => syntheticOnChange(name, newValue, onChange),
    });

    const filteredOptions = type === "combobox" && searchTerm
        ? options.filter(opt => t(opt.label).toLowerCase().includes(searchTerm.toLowerCase()))
        : options;

    return (
        <div className={`h-full relative z-50 space-y-2 ${className}`} ref={selectRef}>
            <Text as="label" t={label} htmlFor={name} className={selectStyles.label} size="sm" />
            <SelectTrigger
                id={name}
                isOpen={isOpen}
                selectedLabel={t(selectedLabel) || (placeholder ? t(placeholder) : "")}
                onToggle={toggleDropdown}
                type={type}
                searchTerm={searchTerm}
                onSearchChange={(e) => setSearchTerm(e.target.value)}
                onInputFocus={() => { if (!isOpen) setIsOpen(true); }}
            />
            <SelectOptions
                options={type === "combobox" ? filteredOptions : options}
                selectedValue={selectedValue}
                isOpen={isOpen}
                labelledById={name}
                onSelect={handleOptionSelect}
                t={t}
            />
        </div>
    );
};

export default Select;