import React, { ComponentProps } from "react";

const CardHeader: React.FC<ComponentProps<"div">> = ({ children, className = "" }) => {
    return (
        <div className={`p-4 border-b border-black/30 dark:border-white/20 ${className}`}>
            {children}
        </div>
    );
};

export default CardHeader;

