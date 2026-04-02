"use client"
import Button from "@/atoms/button/Button";
import Text from "@/atoms/text/Text";
import ActionDTO from "@/presentation/view/dto/molecules/action/dto";
import React from "react";
import Modal from "@/components/ui/molecules/modal/Modal";
import useAction from "./hooks/useActionMutation";

interface ActionProps extends Omit<ActionDTO, "type" | "href" | "external"> { }

const ActionMutation: React.FC<ActionProps> = ({ label, variant, apiRoute, method, body, requiresConfirmation, confirmationMessage, success, error }) => {
    const { handleMutate, translate } = useAction({ apiRoute, method, body, success, error });

    const trigger = (
        <Button t={label} variant={variant || "primary"} size="sm" onClick={handleMutate} />
    );

    if (requiresConfirmation) {
        return (
            <Modal trigger={{ label: translate(label), variant }} title={label} className="w-full md:w-1/2 h-fit max-h-[50vh] scrollbar overflow-y-auto">
                <div className="space-y-4">
                    <Text t={confirmationMessage} />
                    <div className="flex justify-end">{trigger}</div>
                </div>
            </Modal>
        );
    }

    return trigger;
};

export default ActionMutation;