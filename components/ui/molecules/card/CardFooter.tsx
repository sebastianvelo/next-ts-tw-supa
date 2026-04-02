import React, { ComponentProps } from "react";

const CardFooter: React.FC<ComponentProps<"div">> = ({ children, className = "" }) => (
    <div className={`px-6 py-4 border-t border-secondary-200 dark:border-secondary-800 bg-secondary-100 dark:bg-secondary-950 rounded-b-lg ${className}`}>
        {children}
    </div>
);

export default CardFooter;

