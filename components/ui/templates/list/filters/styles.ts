import { getGridCols } from "@/presentation/view/constants/layout";
import { FiltersConfig, FiltersLayout } from "./types";

const baseWrapperClassName = ` py-4 bg-gradient-to-r from-white via-secondary-100/30 to-white dark:from-black dark:via-secondary-950/80 dark:to-black border-b border-secondary-300 dark:border-secondary-800`;

const getWrapperLayoutClassName = (layout: FiltersLayout) =>
    layout === FiltersLayout.HORIZONTAL ? "h-full px-4 animate-slide-in-top" : "px-4 xl:px-6 animate-slide-in-top";

export const getWrapperClassName = (layout: FiltersLayout) => `${baseWrapperClassName} ${getWrapperLayoutClassName(layout)}`;

export const getFiltersClassName = (config?: FiltersConfig) =>
    config?.layout === FiltersLayout.VERTICAL ? "col-span-1 flex flex-col" : `grid ${getGridCols(config?.columns ?? 1)} gap-4`;
