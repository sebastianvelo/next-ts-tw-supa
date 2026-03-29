import { getGridCols } from "@/presentation/view/constants/layout";
import { FiltersConfig, FiltersLayout } from "../types";

const baseWrapperClassName = `py-2 bg-gradient-to-b from-white via-white/30 to-white dark:from-black dark:via-black/60 dark:to-black border-secondary-300 dark:border-secondary-800 overflow-x-hidden`;

const getWrapperLayoutClassName = (layout: FiltersLayout) =>
    layout === FiltersLayout.HORIZONTAL ? "h-full px-4 border-b" : "px-2 xl:px-4 border-r";

export const getWrapperClassName = (layout: FiltersLayout) =>
    `${baseWrapperClassName} ${getWrapperLayoutClassName(layout)}`;

export const getFiltersClassName = (config?: FiltersConfig) =>
    config?.layout === FiltersLayout.VERTICAL ? "col-span-1 flex flex-col gap-2 divide-y divide-secondary-300 dark:divide-secondary-800" : `grid ${getGridCols(config?.columns ?? 1)} gap-4 p-4`;
