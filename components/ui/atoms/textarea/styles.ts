import { FieldStyleProps } from "./types";

const baseStyles = "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none dark:bg-secondary-950/50 dark:text-secondary-50 border-secondary-300 dark:border-secondary-800";

const variants = {
    default: "",
    error: "border-red-500",
};

const getStyle = ({ variant = "default" }: FieldStyleProps) =>
    `${baseStyles} ${variants[variant]}`;

export default getStyle;
