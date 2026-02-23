export const baseStyles = "relative py-4 px-4 font-semibold text-sm transition-all duration-200 ease-in-out overflow-hidden";

// Estilos de ancho
export const widthStyles = "max-w-[200px]";

// Estilos de texto
export const inactiveTextStyles = "text-secondary-500 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-200";
export const activeTextStyles = "text-primary-600 dark:text-primary-400";

// Estilos para modo horizontal (tabs arriba con línea inferior)
export const baseAfterStyles = "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-all after:duration-200";
export const activeAfterStyles = "after:bg-primary-600 dark:after:bg-primary-400 after:scale-x-100";
export const inactiveAfterStyles = "after:scale-x-0 hover:after:scale-x-100 hover:after:bg-secondary-300 dark:hover:after:bg-secondary-700";

// Estilos para modo vertical (tabs a la izquierda con línea lateral)
export const baseBeforeStyles = "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:transition-all before:duration-200";
export const activeBeforeStyles = "before:bg-primary-600 dark:before:bg-primary-400";
export const inactiveBeforeStyles = "before:bg-transparent hover:before:bg-secondary-900 dark:hover:before:bg-secondary-100";

const getTabStyle = (horizontal: boolean, active: boolean | undefined) => {
    const afterStyles = active ? activeAfterStyles : inactiveAfterStyles;
    const beforeStyles = active ? activeBeforeStyles : inactiveBeforeStyles;
    const indicatorStyles = horizontal ? `${baseAfterStyles} ${afterStyles}` : `${baseBeforeStyles} ${beforeStyles}`;

    return `
        ${baseStyles}
        ${widthStyles}
        ${indicatorStyles}
        ${active ? activeTextStyles : inactiveTextStyles}
    `.trim().replace(/\s+/g, " ");
}

export default getTabStyle;