import Input from "@/atoms/input/Input";
import { FilterParam } from "../hooks/useFilterParam";

interface FilterInputFieldProps extends FilterParam {
    param: string;
    inputType?: string;
    placeholder?: string;
};

const FilterInputField: React.FC<FilterInputFieldProps> = ({ param, current, set, inputType = "text", placeholder }) => (
    <Input
        key={`${param}-${current || ""}`}
        type={inputType}
        placeholder={placeholder}
        defaultValue={current || ""}
        onBlur={(e) => set(e.target.value || null)}
        onKeyDown={(e) => {
            if (e.key === "Enter") {
                set(e.currentTarget.value || null);
            }
        }}
    />
);

export default FilterInputField;