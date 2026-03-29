export const styles = {
    container: "w-full font-sans bg-white dark:bg-secondary-900 rounded-sm flex flex-col gap-4 relative",
    relativeWrapper: "relative w-full",
    svg: {
        base: "absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0",
        path: "stroke-primary-500",
    },
    grid: "grid grid-cols-2 gap-4 md:gap-8 relative z-10 items-stretch",
    column: {
        left: "flex flex-col gap-4 pl-1",
        right: "flex flex-col gap-4 pr-1",
    },
    option: {
        base: "w-full px-4 py-3 rounded-md border-2 text-sm md:text-base transition-all duration-200 shadow-sm justify-stretch h-full",
        leftAlign: "text-left border-r-4 border-r-primary-300 dark:border-r-primary-600",
        rightAlign: "text-right border-l-4 border-l-primary-300 dark:border-l-primary-600",

        leftActive: "border-primary-500 bg-primary-50 text-primary-800 dark:border-primary-400 dark:bg-primary-900/40 dark:text-primary-100 ring-2 ring-primary-200 dark:ring-primary-800",
        connected: "border-primary-400 bg-primary-50/50 text-primary-700 dark:border-primary-500 dark:bg-primary-900/20 dark:text-primary-200",
        default: "border-secondary-200 dark:border-secondary-700 bg-secondary-50 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-100",

        leftHover: "hover:border-primary-300 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30",
        rightHoverActive: "hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:scale-[1.02] cursor-pointer",
        pointer: "cursor-pointer",
        defaultCursor: "cursor-default"
    }
};
