"use client"
import ActionDTO, { ActionType } from "@/presentation/view/models/molecules/action/dto";
import React from "react";
import ActionLink from "./variants/link/ActionLink";
import ActionMutation from "./variants/mutation/ActionMutation";

interface ActionProps extends ActionDTO { }

const Action: React.FC<ActionProps> = ({ label, variant, type = ActionType.MUTATION, apiRoute, method, body, requiresConfirmation, confirmationMessage, href, external, success, error }) => {
    if (type === ActionType.LINK && href) {
        return <ActionLink label={label} variant={variant} href={href} external={external} />
    }

    return <ActionMutation label={label} variant={variant} apiRoute={apiRoute} method={method} body={body} requiresConfirmation={requiresConfirmation} confirmationMessage={confirmationMessage} success={success} error={error} />;
};

export default Action;