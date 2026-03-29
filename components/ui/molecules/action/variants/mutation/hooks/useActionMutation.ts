"use client"
import HttpMethod from "@/core/types/HttpMethod";
import useMutation from "@/hooks/api/useMutation";
import useI18N from "@/hooks/lang/useI18N";
import useToast from "@/components/ui/molecules/toast/hooks/useToast";
import ActionDTO from "@/presentation/view/dto/common/action";
import { useRouter } from "next/navigation";

type UseActionProps = Omit<ActionDTO, "type" | "variant">;

const useAction = ({ apiRoute, method, body, success, error }: UseActionProps) => {
    const { showToast } = useToast();
    const { t: translate } = useI18N();
    const router = useRouter();

    const { mutate, isLoading } = useMutation<{}>({
        url: apiRoute || "",
        method: method || HttpMethod.POST,
        onSuccess: () => {
            showToast(translate(success?.message ?? ""), "success");
            if (success?.goTo) {
                router.push(success.goTo);
                router.refresh();
            }
        },
        onError: () => {
            showToast(translate(error?.message ?? ""), "error");
        },
    });

    const handleMutate = () => {
        mutate(body);
    };

    return {
        handleMutate,
        isLoading,
        translate,
    };
};

export default useAction;