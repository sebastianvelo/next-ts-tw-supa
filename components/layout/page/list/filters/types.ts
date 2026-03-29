import { ColumnSize } from "@/presentation/view/constants/layout";

export enum FiltersLayout {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}

export interface FiltersConfig {
    droppeable?: boolean;
    title?: string;
    columns?: ColumnSize;
    layout?: FiltersLayout;
}
