export const styles = {
    container: "w-full flex flex-col gap-6 font-sans",
    wordBank: {
        container: "bg-secondary-50 dark:bg-black/50 border-2 border-dashed border-primary-200 dark:border-primary-700/50 rounded-xl p-4 flex flex-col gap-3",
        title: "text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400",
        wordsContainer: "flex flex-wrap gap-2 min-h-[36px] items-center",
        draggableWrapper: "cursor-pointer hover:-translate-y-0.5 transition-transform",
        badge: "border-2 border-primary-200 dark:border-primary-700/50 bg-white dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 hover:border-primary-500 dark:hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 shadow-sm font-semibold select-none",
        emptyText: "text-sm italic text-secondary-400 dark:text-secondary-500",
    },
    sentences: {
        container: "flex flex-col gap-4",
        row: "flex items-baseline flex-wrap gap-1.5 leading-loose",
        number: "font-bold text-primary-600 dark:text-primary-400 text-sm min-w-[18px]",
        textWrapper: "text-secondary-800 dark:text-secondary-200 text-base leading-relaxed flex-1 flex flex-wrap items-baseline gap-1",
        emptyPrompt: "text-secondary-500 dark:text-secondary-400 italic",
    },
    blank: {
        base: "inline-flex items-center gap-1 min-w-[100px] border-b-[3px] px-2 pt-1 pb-0.5 rounded-t-md transition-all cursor-pointer font-semibold text-sm mx-1 align-baseline",
        filled: "bg-primary-100 dark:bg-primary-900/30 border-primary-500 dark:border-primary-400 text-primary-900 dark:text-primary-100",
        empty: "bg-secondary-50 dark:bg-secondary-800 border-primary-300 dark:border-primary-700/50 text-secondary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-400",
        filledContent: "flex items-center w-full justify-between gap-2",
        removeIcon: "text-[10px] text-primary-400 hover:text-danger-500 transition-colors",
        emptyContent: "text-transparent font-normal w-full text-center"
    }
};
