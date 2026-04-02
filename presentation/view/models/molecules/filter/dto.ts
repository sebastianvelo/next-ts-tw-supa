import BadgeDTO from "@/presentation/view/models/atoms/badge/dto";
import SelectOptionDTO from "@/presentation/view/models/molecules/select/select-option";

export enum FilterFieldType {
    BADGE = "badge",
    INPUT = "input",
    SELECT = "select",
    COMBOBOX = "combobox"
}

type FilterFieldDTO =
    | {
        title?: string;
        param: string;
        options?: BadgeDTO[];
        type?: FilterFieldType.BADGE;
        placeholder?: string;
    }
    | {
        title?: string;
        param: string;
        options?: SelectOptionDTO[];
        type?: FilterFieldType.SELECT | FilterFieldType.COMBOBOX;
        placeholder?: string;
    }
    | {
        title?: string;
        param: string;
        type?: FilterFieldType.INPUT;
        inputType?: string;
        placeholder?: string;
    };

export default FilterFieldDTO;