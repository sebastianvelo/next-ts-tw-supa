import { ColumnSize } from "@/presentation/view/constants/layout";
import { FiltersConfig } from "./filters/types";

export enum PageListViewLayout {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}

export type PageListViewConfig = {
    layout?: PageListViewLayout;
    columns?: ColumnSize;
    filters?: FiltersConfig;
};
