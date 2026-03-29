import { FieldStyleProps } from "./types";

const baseStyles = "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-950/50 dark:text-secondary-50 border-secondary-300 dark:border-secondary-800";

const checkableStyles = "focus:outline-none focus:ring-2 focus:ring-primary-500/50";

const variants = {
    default: "",
    error: "border-red-500",
};

const getStyle = ({ variant = "default", isCheckable = false }: FieldStyleProps) =>
    isCheckable ? checkableStyles : `${baseStyles} ${variants[variant]}`;

export default getStyle;
