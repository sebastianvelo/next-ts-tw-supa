import Select from "@/molecules/select/Select";
import { SelectOption } from "@/molecules/select/hooks/useSelectInput";
import { FilterParam } from "../hooks/useFilterParam";

interface FilterSelectFieldProps extends FilterParam {
    param: string;
    options?: SelectOption[];
    type?: "select" | "combobox";
};

const FilterSelectField: React.FC<FilterSelectFieldProps> = ({ options, param, current, set, type = "select" }) => (
    <Select
        name={param}
        className="w-full"
        defaultValue={current || ""}
        onChange={(e) => set(e.target.value || null)}
        options={options?.map((opt) => ({
            label: opt.label || "",
            value: opt.value || "",
        })) || []}
        type={type}
    />
);

export default FilterSelectField;