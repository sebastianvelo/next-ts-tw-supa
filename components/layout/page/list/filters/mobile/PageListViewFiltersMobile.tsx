"use client"
import FilterField from "@/molecules/filters/FilterField";
import Drawer from "@/organisms/drawer/Drawer";
import { FilterIcon, SlidersHorizontal } from "lucide-react";
import { PageListViewFiltersProps } from "../PageListViewFilters";

function PageListViewFiltersMobile<T>({ filters, config }: Readonly<PageListViewFiltersProps<T>>) {
    const activeFiltersCount = filters?.filter(
        (f) => (f as any).value !== undefined && (f as any).value !== null && (f as any).value !== ""
    ).length ?? 0;

    return (
        <div className="md:hidden">
            <Drawer
                trigger={(open) => (
                    <button
                        onClick={open}
                        aria-label="Abrir filtros"
                        className="
                                fixed bottom-5 right-5 z-40
                                flex items-center gap-2
                                bg-secondary-900 dark:bg-secondary-100
                                text-white dark:text-secondary-900
                                px-4 py-3 rounded-full shadow-xl
                                text-sm font-medium
                                active:scale-95 transition-transform duration-150
                            "
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        <span>Filtros</span>
                        {activeFiltersCount > 0 && (
                            <span className="
                                    -mr-1 ml-1 w-5 h-5 rounded-full
                                    bg-primary-500 text-white
                                    text-xs font-bold
                                    flex items-center justify-center
                                ">
                                {activeFiltersCount}
                            </span>
                        )}
                    </button>
                )}
                header={
                    <>
                        <FilterIcon className="w-4 h-4" />
                        <span>{config?.title || "Filtros"}</span>
                    </>
                }
                content={
                    <div className="flex flex-col divide-y divide-secondary-200 dark:divide-secondary-800">
                        {filters?.map((filter) => (
                            <FilterField
                                key={filter.param}
                                {...filter}
                                droppeable={config?.droppeable}
                            />
                        ))}
                    </div>
                }
                footer={(close) => (
                    <button
                        onClick={close}
                        className="
                                w-full py-3 rounded-xl
                                bg-secondary-900 dark:bg-secondary-100
                                text-white dark:text-secondary-900
                                font-semibold text-sm
                                active:opacity-80 transition-opacity
                            "
                    >
                        Aplicar filtros
                    </button>
                )}
            />
        </div>
    );
}

export default PageListViewFiltersMobile;