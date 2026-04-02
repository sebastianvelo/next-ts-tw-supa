import React, { ComponentProps } from "react";

const CardHeader: React.FC<ComponentProps<"div">> = ({ children, className = "" }) => (
    <div className={`p-4 bg-white dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-800 ${className}`}>
        {children}
    </div>
);

export default CardHeader;

