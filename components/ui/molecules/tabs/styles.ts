export const getContainerClassName = (horizontal: boolean) =>
    !horizontal && "flex gap-6";

export const getTabsBorderClassName = (horizontal: boolean) =>
    horizontal ? "border-b border-secondary-200 dark:border-secondary-800" : "border-r border-secondary-200 dark:border-secondary-800";

export const getTabsNavClassName = (horizontal: boolean, tabsClassName: string) =>
    horizontal ? `flex space-x-2 ${tabsClassName}` : `flex flex-col space-y-1 ${tabsClassName}`;
