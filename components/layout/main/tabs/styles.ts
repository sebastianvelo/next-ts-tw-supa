const baseParent = "bg-white dark:bg-secondary-900 border-r border-secondary-200 dark:border-secondary-800 flex flex-row animate-slide-in-left relative min-w-48 overflow-x-auto whitespace-nowrap scrollbar-primary";

export const nestedClassName = "absolute md:relative top-8 md:top-0 left-0 md:left-0 flex flex-row sm:flex-col mt-1 ml-2 pl-1 gap-0.5";

export const parentClassName = (horizontal: boolean) => horizontal
    ? `${baseParent} gap-1`
    : `${baseParent} sm:flex-col pl-2 gap-2`;
