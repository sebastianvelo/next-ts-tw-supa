export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6;

const GRID_COLS_MAP: Record<ColumnSize, string> = {
    1: "grid-cols-1",
    2: "xl:grid-cols-2",
    3: "2xl:grid-cols-3",
    4: "2xl:grid-cols-4",
    5: "2xl:grid-cols-5",
    6: "2xl:grid-cols-6",
};

const COL_SPAN_MAP: Record<ColumnSize, string> = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
};

export const getGridCols = (size: ColumnSize) => GRID_COLS_MAP[size];

export const getColSpan = (size: ColumnSize) => COL_SPAN_MAP[size];