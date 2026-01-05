export const baseStyles = "backdrop-shadow-md relative py-4 px-4 font-semibold text-sm transition-all duration-200 ease-in-out rounded-t-lg";
export const inactiveTextStyles = "text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-200";
export const activeTextStyles = "text-primary-600 dark:text-primary-400";

export const baseAfterStyles = "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-all after:duration-200";
export const baseAfterMenuStyles = "sm:after:hidden";

export const activeAfterStyles = "after:bg-primary-600 dark:after:bg-primary-400 after:scale-x-100";
export const inactiveAfterStyles = "after:scale-x-0 hover:after:scale-x-100 hover:after:bg-secondary-900 dark:hover:after:bg-secondary-200";

export const baseBeforeStyles = "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0 before:transition-all before:duration-200 sm:before:w-1";
export const activeBeforeStyles = "sm:before:bg-primary-600 sm:dark:before:bg-primary-400";
export const inactiveBeforeStyles = "sm:before:bg-transparent sm:hover:before:bg-secondary-900 sm:dark:hover:before:bg-secondary-200";

const getTabStyle = (horizontal: boolean, active: boolean | undefined) => {
    return `
        ${baseStyles}
        ${baseAfterStyles}
        ${!horizontal ? baseAfterMenuStyles : ""}
        ${!horizontal ? baseBeforeStyles : ""}
        ${active
            ? `${activeTextStyles} ${activeAfterStyles} ${!horizontal ? activeBeforeStyles : ""}`
            : `${inactiveTextStyles} ${inactiveAfterStyles} ${!horizontal ? inactiveBeforeStyles : ""}`}
    `.trim().replace(/\s+/g, ' ');
}

export default getTabStyle;