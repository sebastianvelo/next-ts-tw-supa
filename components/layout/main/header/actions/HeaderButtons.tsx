import React from "react";

const HeaderButtons: React.FC<React.PropsWithChildren> = ({ children }) => (
    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 lg:items-end">
        {children}
    </div>
);

export default HeaderButtons;