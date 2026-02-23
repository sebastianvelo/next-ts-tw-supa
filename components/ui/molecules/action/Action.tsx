import Button from "@/components/ui/atoms/button/Button";
import Text from "@/components/ui/atoms/text/Text";
import HttpMethod from "@/core/types/HttpMethod";
import ActionDTO from "@/core/view/DTO/common/action";
import useMutation from "@/hooks/api/useMutation";
import { useRouter } from "next/navigation";
import React from "react";
import Modal from "../modal/Modal";

interface ActionProps extends ActionDTO { }

const Action: React.FC<ActionProps> = ({ label, variant, apiRoute, method, body, shouldRefresh, requiresConfirmation, confirmationMessage }) => {
    const router = useRouter();

    const { mutate } = useMutation<{}>({
        url: apiRoute || "",
        method: method || HttpMethod.POST,
        onSuccess: () => {
            if (shouldRefresh) {
                router.refresh();
            }
        }
    });

    const trigger = (
        <Button
            t={label}
            variant={variant || "primary"}
            size="sm"
            onClick={() => mutate(body)}
        />
    );

    if (requiresConfirmation) {
        return (
            <Modal button={{ label, variant }} title={label} className="w-full h-full md:w-1/2 md:h-2/3 scrollbar overflow-y-auto">
                <div className="space-y-4">
                    <Text t={confirmationMessage} />
                    <div className="flex justify-end">
                        {trigger}
                    </div>
                </div>
            </Modal>
        );
    }

    return trigger;
}

export default Action;