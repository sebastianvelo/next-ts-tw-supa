"use client"
import Text from "@/components/ui/atoms/text/Text";
import useSelectInput, { SelectOption } from "@/components/ui/molecules/select/hooks/useSelectInput";
import useI18N from "@/hooks/lang/useI18N";
import { selectStyles } from "./Select.styles";
import SelectOptions from "./SelectOptions";
import SelectTrigger from "./SelectTrigger";

const syntheticOnChange = (name: string, newValue: string | number, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void) => {
    const syntheticEvent = {
        target: { name, value: newValue.toString() },
        currentTarget: { name, value: newValue.toString() }
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(syntheticEvent);
};

interface SelectProps {
    label?: string;
    name: string;
    value?: string | number;
    defaultValue?: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    className?: string;
}

const Select: React.FC<SelectProps> = ({ label = "", name, value = "", defaultValue, options, className = "", onChange }) => {
    const { t } = useI18N();
    const { selectedLabel, selectedValue, isOpen, selectRef, toggleDropdown, handleOptionSelect } = useSelectInput({
        options,
        initialValue: defaultValue || value,
        onChange: (newValue) => syntheticOnChange(name, newValue, onChange),
    });

    return (
        <div className={`relative z-50 ${className}`} ref={selectRef}>
            <Text as="label" t={label} htmlFor={name} className={selectStyles.label} />
            <SelectTrigger
                id={name}
                isOpen={isOpen}
                selectedLabel={t(selectedLabel)}
                onToggle={toggleDropdown}
            />
            <SelectOptions
                options={options}
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