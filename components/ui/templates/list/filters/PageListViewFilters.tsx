"use client"
import FilterFieldDTO from "@/presentation/view/models/molecules/filter/dto";
import PageListViewFiltersDesktop from "./desktop/PageListViewFiltersDesktop";
import PageListViewFiltersMobile from "./mobile/PageListViewFiltersMobile";
import { FiltersConfig } from "./types";

export interface PageListViewFiltersProps {
    filters?: FilterFieldDTO[];
    config?: FiltersConfig;
}

function PageListViewFilters({ filters, config }: Readonly<PageListViewFiltersProps>) {
    return (
        <>
            <PageListViewFiltersDesktop filters={filters} config={config} />
            <PageListViewFiltersMobile filters={filters} config={config} />
        </>
    );
}

export default PageListViewFilters;