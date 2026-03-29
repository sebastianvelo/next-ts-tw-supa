import Text from "@/atoms/text/Text";
import FilterFieldDTO, { FilterFieldType } from "@/presentation/view/dto/filter/filter-field";
import Dropdown from "../dropdown/Dropdown";
import useFilterParam from "./hooks/useFilterParam";
import FilterBadgeField from "./variants/FilterBadgeField";
import FilterInputField from "./variants/FilterInputField";
import FilterSelectField from "./variants/FilterSelectField";

type FilterFieldProps = {
    className?: string;
    droppeable?: boolean;
} & FilterFieldDTO;

const Filter: React.FC<FilterFieldProps> = (props) => {
    const { current, set } = useFilterParam(props.param);

    switch (props.type) {
        case FilterFieldType.BADGE:
            return (
                <FilterBadgeField
                    options={props.options}
                    current={current}
                    set={set}
                />
            );

        case FilterFieldType.SELECT:
        case FilterFieldType.COMBOBOX:
            return (
                <FilterSelectField
                    options={props.options}
                    param={props.param}
                    current={current}
                    set={set}
                    type={props.type}
                />
            );

        case FilterFieldType.INPUT:
            return (
                <FilterInputField
                    param={props.param}
                    current={current}
                    set={set}
                    inputType={props.inputType}
                    placeholder={props.placeholder || props.title}
                />
            );
    }
};

const FilterField: React.FC<FilterFieldProps> = (props) => (
    <div className={`${props.className || ""} w-full`}>
        {props.droppeable ? (
            <Dropdown variant="inline">
                <Text size="sm" transform="uppercase" weight="bold" t={props.title} className="py-2" />
                <div className={`flex space-x-2 items-center w-full`}>
                    <Filter {...props} />
                </div>
            </Dropdown>
        ) : (
            <div className="h-full flex flex-col justify-between">
                <Text size="sm" transform="uppercase" weight="bold" t={props.title} className="py-2" />
                <div className={`flex space-x-2 items-center`}>
                    <Filter {...props} />
                </div>
            </div>
        )}
    </div>
);

export default FilterField;