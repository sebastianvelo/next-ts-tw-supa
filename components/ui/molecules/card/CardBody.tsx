import React, { ComponentProps } from "react";

const CardBody: React.FC<ComponentProps<"div">> = ({ children, className = "" }) => {
    return (
        <div className={`p-4 ${className}`}>
            {children}
        </div>
    );
};

export default CardBody;

