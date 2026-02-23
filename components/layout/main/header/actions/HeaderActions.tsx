import Action from "@/components/ui/molecules/action/Action";
import ActionDTO from "@/core/view/DTO/common/action";
import React from "react";

interface HeaderActionsProps {
    actions?: ActionDTO[];
}

const HeaderActions: React.FC<HeaderActionsProps> = ({ actions }) => (
    actions && actions.length > 0 && (
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 lg:items-end">
            {actions.map((action) => (
                <Action key={action.label} {...action} />
            ))}
        </div>
    )
);

export default HeaderActions;