"use client"
import ListViewDTO from "@/presentation/view/dto/list-view/list-view";
import PageListViewFiltersDesktop from "./desktop/PageListViewFiltersDesktop";
import PageListViewFiltersMobile from "./mobile/PageListViewFiltersMobile";
import { FiltersConfig } from "./types";

export interface PageListViewFiltersProps<T> extends Pick<ListViewDTO<T>, "filters"> {
    config?: FiltersConfig;
}

function PageListViewFilters<T>({ filters, config }: Readonly<PageListViewFiltersProps<T>>) {
    return (
        <>
            <PageListViewFiltersDesktop filters={filters} config={config} />
            <PageListViewFiltersMobile filters={filters} config={config} />
        </>
    );
}

export default PageListViewFilters;