const baseParent = "border-r border-secondary-200 dark:border-secondary-800 animate-slide-in-left relative min-w-48 overflow-x-auto whitespace-nowrap scrollbar-thin";
const containerStyles = "from-secondary-100 via-white to-secondary-100 dark:from-black dark:via-secondary-950 dark:to-black";

export const nestedClassName = "flex flex-row sm:flex-col mt-1 ml-2 pl-1 gap-0.5";

export const parentClassName = (horizontal: boolean) => horizontal
    ? `${baseParent} bg-gradient-to-l  ${containerStyles} flex flex-row gap-1`
    : `${baseParent} bg-gradient-to-b ${containerStyles} flex flex-row sm:flex-col gap-0.5`;
