"use client"
import Title from "@/atoms/title/Title";
import FilterField from "@/molecules/filters/FilterField";
import { FilterIcon } from "lucide-react";
import { PageListViewFiltersProps } from "../PageListViewFilters";
import { FiltersLayout } from "../types";
import { getFiltersClassName, getWrapperClassName } from "./styles";

function PageListViewFiltersDesktop<T>({ filters, config }: Readonly<PageListViewFiltersProps<T>>) {
    return (
        <div className={`hidden md:block ${getWrapperClassName(config?.layout ?? FiltersLayout.VERTICAL)}`}>
            <Title className="flex p-3 items-center space-x-2">
                <FilterIcon className="w-4 h-4" />
                <span>{config?.title || "Filtros"}</span>
            </Title>
            <div className={getFiltersClassName(config)}>
                {filters?.map((filter) => (
                    <FilterField key={filter.param} {...filter} droppeable={config?.droppeable} />
                ))}
            </div>
        </div>
    );
}

export default PageListViewFiltersDesktop;