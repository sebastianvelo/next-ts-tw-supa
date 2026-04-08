import BadgeDTO from "@/presentation/view/models/atoms/badge/dto";
import SelectOptionDTO from "@/presentation/view/models/molecules/select/select-option";

export enum FilterFieldType {
    BADGE = "badge",
    INPUT = "input",
    SELECT = "select",
    COMBOBOX = "combobox"
}

type BaseFilterFieldDTO<T> = {
    title?: string;
    param: string;
    type: T;
}

type BadgeFilterFieldDTO = BaseFilterFieldDTO<FilterFieldType.BADGE> & {
    options?: BadgeDTO[];
}

type SelectFilterFieldDTO = BaseFilterFieldDTO<FilterFieldType.SELECT | FilterFieldType.COMBOBOX> & {
    options?: SelectOptionDTO[];
    placeholder?: string;
}

type InputFilterFieldDTO = BaseFilterFieldDTO<FilterFieldType.INPUT> & {
    inputType?: string;
    placeholder?: string;
}

type FilterFieldDTO = BadgeFilterFieldDTO | SelectFilterFieldDTO | InputFilterFieldDTO;

export default FilterFieldDTO;