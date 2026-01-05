import ActionDTO from "@/core/view/DTO/common/action";
import React from "react";
import HeaderAction from "./HeaderAction";

interface HeaderActionsProps {
    actions?: ActionDTO[];
}

const HeaderActions: React.FC<HeaderActionsProps> = ({ actions }) => (
    actions && actions.length > 0 && (
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 lg:items-end">
            {actions.map((action, index) => (
                <HeaderAction key={index} {...action} />
            ))}
        </div>
    )
);

export default HeaderActions;