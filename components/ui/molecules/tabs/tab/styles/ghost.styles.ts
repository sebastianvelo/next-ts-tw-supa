const baseStyles =
    "ml-1 relative px-3 py-2 font-medium text-[13px] tracking-[-0.01em] transition-all duration-150 ease-in-out cursor-pointer";

const layoutStyles = (horizontal: boolean) =>
    horizontal ? `rounded-[9px]` : `rounded-[8px] lg:rounded-tl-[8px] lg:rounded-bl-[8px]`;

const widthStyles = "w-full";

const inactiveTextStyles =
    "text-secondary-500 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100 hover:bg-white dark:hover:bg-white/5 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06)]";

const activeTextStyles =
    "font-semibold text-primary-600 dark:text-primary-400 bg-white dark:bg-primary-950/60 shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.4)] dark:ring-1 dark:ring-primary-500/20";

const getGhostTabStyle = (horizontal: boolean, active: boolean | undefined) => {
    return `
    ${baseStyles}
    ${widthStyles}
    ${layoutStyles(horizontal)}
    ${active ? activeTextStyles : inactiveTextStyles}
  `
        .trim()
        .replace(/\s+/g, " ");
};

export default getGhostTabStyle;